'use strict'

const formulario      = document.querySelector('.formCadastro')
const btn             = document.querySelector('#btn')
const checkbox        = document.querySelector('#chkAceito')
const txtTitulo       = document.querySelector('#txtTitulo')
const txtDescricao    = document.querySelector('#txtDescricao')
const feedbackMessage = document.querySelector('#feedbackMessage')
const closeMenssage   = document.querySelector('.fa-close')
const contarCaracteres        = document.querySelector('#contador')
btn.disabled = true


//Habilitando e desabilitando o botao
checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
});


//Envia o formulario, validando ele, caso estiver incompleto aparece o feedbackMessage 
//submit, quando enviar as informaçoes pro servidor
formulario.addEventListener('submit', () => {
    if (txtTitulo.value.length < 1  || txtDescricao.value.length < 1){
        feedbackMessage.style.transform = 'translateY(0)'
    } else {
        feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
        //impede que o evento occora, no caso o envio do formulario
        e.preventDefault()
    }


    //Fecha feedbackMessage clickando, caso valores estiverem incompletos
    closeMenssage.addEventListener('click', () => {
        feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
    })

    
    //Fecha feedbackMessage com o esc, caso valores estiverem incompletos
    document.addEventListener('keyup', () => {
    const tecla = event.keyCode;
        if (tecla === 27) {
            feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
        }
    })
});



//Altera o numero de quantidade de caracteres
//input _é disparado sincronicamente quando o valor de um elemento <input>, <select>, ou <textarea> é alterado
//keyup _ é disparado qnd aperta uma tecla
//o max length, ta vindo definido la do html, que no caso é 255
const contador = document.querySelector('#contador span')
txtDescricao.addEventListener('input', () => {
    contarCaracteres.style.display = 'block'
    const tecla = event.keyCode;
    let numerosCaracteres = txtDescricao.value.length

    if (numerosCaracteres > txtDescricao.maxLength) {
        contador.textContent = numerosCaracteres
    } else {
        if (tecla === 8) {
            console.log('tecla para apagar')
            contador.textContent = txtDescricao.maxLength - numerosCaracteres
        } else {
            contador.textContent = txtDescricao.maxLength - numerosCaracteres
        }
    }
})







// pegar a tecla
// function pegaTecla(){
//     var tecla = event.keyCode;
//     console.log(tecla);
// }
// document.addEventListener('keydown', pegaTecla)