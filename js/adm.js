/**FORMULÁRIOS DO ADMINISTRADOR*/
/**ASSISTENTE*/

const wrapperAdm = document.querySelector('.wrapper-adm');
const LinkRemover = document.querySelector('.link-remover');
const LinkCadastroAdm = document.querySelector('.link-cadastrarAdm');
const btnPopupAdm = document.querySelector('.adminpopup');
const iconeFecharAdm = document.querySelector('.icon-fecharAdm');

LinkCadastroAdm.addEventListener('click', ()=>{
    wrapperAdm.classList.add('active');
})

LinkRemover.addEventListener('click', ()=>{
    wrapperAdm.classList.remove('active');
})

btnPopupAdm.addEventListener('click', ()=>{
    wrapperAdm.classList.add('active-popup');
})

iconeFecharAdm.addEventListener('click', ()=>{
    wrapperAdm.classList.remove('active-popup');
})

/**ANIMAIS*/

const wrapperAnimal = document.querySelector('.wrapper-animais');
const LinkRemoverAnimal = document.querySelector('.link-remover-animal');
const LinkCadastroAnimal = document.querySelector('.link-cadastrarAnimal');
const btnPopupAnimal = document.querySelector('.animalpopup');
const iconeFecharAnimal = document.querySelector('.icon-fecharAnimal');

LinkCadastroAnimal.addEventListener('click', ()=>{
    wrapperAnimal.classList.add('active');
})

LinkRemoverAnimal.addEventListener('click', ()=>{
    wrapperAnimal.classList.remove('active');
})

btnPopupAnimal.addEventListener('click', ()=>{
    wrapperAnimal.classList.add('active-popup');
})

iconeFecharAnimal.addEventListener('click', ()=>{
    wrapperAnimal.classList.remove('active-popup');
})

function previewImage(input) {
    const preview = document.getElementById('preview-image');
    const imagePreview = document.getElementById('image-preview');
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        preview.src = e.target.result;
        imagePreview.style.display = 'block'; // Mostrar a div de visualização
      };
  
      reader.readAsDataURL(input.files[0]);
    } else {
      preview.src = '#';
      imagePreview.style.display = 'none'; // Esconder a div de visualização
    }
  }


/**CONSULTA*/

const wrapperConsulta = document.querySelector('.consulta');
const btnPopupConsulta = document.querySelector('.consultapopup');
const iconeFecharConsulta = document.querySelector('.icon-fecharConsulta');

btnPopupConsulta.addEventListener('click', ()=>{
    wrapperConsulta.classList.add('active-popup');
})

iconeFecharConsulta.addEventListener('click', ()=>{
    wrapperConsulta.classList.remove('active-popup');
})