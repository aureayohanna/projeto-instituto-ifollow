(function() {
  "use strict";

  /**Easy selector helper function*/
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**Easy event listener function*/
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /*Easy on scroll event listener*/
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**Navbar links active state on scroll*/
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)


  /**botão de voltar ao topo*/
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**nav mobile*/
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**Scroll to with offset*/
const scrollto = (el) => {
  let header = select('#header') // ou null se não tiver cabeçalho fixo
  let offset = header ? header.offsetHeight : 0

  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
  })
}


  /**Scrool with ofset on links with a class name .scrollto*/
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**animação no scroll*/
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()

const tilt = $('.js-tilt').tilt();

$('.js-destroy').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    element.tilt.destroy.call(element);
});

$('.js-getvalue').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    const test = element.tilt.getValues.call(element);
    console.log(test[0]);
});

$('.js-reset').on('click', function () {
    const element = $(this).closest('.js-parent').find('.js-tilt');
    element.tilt.reset.call(element);
});

window.addEventListener('DOMContentLoaded', (event) => {
  const myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
  myModal.show();

  setTimeout(() => {
    myModal.hide();
  }, 4000);
});
/*tilt.on('change', function (e, transforms) {
 console.log(transforms);
 });

 tilt.on('tilt.mouseLeave', function (e) {
 console.log(e);
 });

 tilt.on('tilt.mouseEnter', function (e) {
 console.log(e);
 });*/