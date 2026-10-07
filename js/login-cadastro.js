/**USUÁRIO COMUM*/

const wrapper = document.querySelector('.wrapper');
const LinkLogin = document.querySelector('.link-login');
const LinkCadastro = document.querySelector('.link-cadastrar');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconeFechar = document.querySelector('.icon-fechar');

LinkCadastro.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

LinkLogin.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconeFechar.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
