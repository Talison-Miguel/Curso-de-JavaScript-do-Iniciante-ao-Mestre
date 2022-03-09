const formulario      = document.querySelector('.formCadastro__app')
const btn             = document.querySelector('#btn')
const checkbox        = document.querySelector('#chkAceito')
const txtTitulo       = document.querySelector('#txtTitulo')
const txtDescricao    = document.querySelector('#txtDescricao')
const feedbackMessage = document.querySelector('#feedbackMessage')
const closeMenssage   = document.querySelector('.fa-close')


//Habilitando e desabilitando o botao
checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
});


//Envia o formulario, validando ele, caso estiver incompleto aparece o feedbackMessage 
btn.addEventListener('click', () => {
    if (txtTitulo.value.length < 1  || txtDescricao.value.length < 1){
        feedbackMessage.style.transform = 'translateY(0)'
    } else {
        feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
    }

    //Fecha feedbackMessage caso valores estiverem incompletos
    closeMenssage.addEventListener('click', () => {
        feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
    })
});



//Altera o numero de quantidade de caracteres
let numCont = 255
const contador = document.querySelector('#contador span')
function digitandoLocal(e){
    const tecla = event.keyCode;


    if(tecla === 8){
        console.log('tecla delete')
        numCont++
        contador.textContent = numCont
    } else {
        numCont--
        contador.textContent = numCont
    }
};

txtDescricao.addEventListener('keyup', digitandoLocal)

// pegar a tecla
// function pegaTecla(){
//     var tecla = event.keyCode;
//     console.log(tecla);
// }
// document.addEventListener('keydown', pegaTecla)