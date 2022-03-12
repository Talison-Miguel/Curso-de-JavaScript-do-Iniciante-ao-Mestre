(function () {
    "use strict";

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector('.formCadastro')
    

    //submit, quando enviar as informaçoes pro servidor
    formCadastro.addEventListener('submit', function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showErrosMessage("preencha todos os campos", function () {
                txtTitulo.focus()
            })
            e.preventDefault()
            txtTitulo.focus()
        }
    })


    const feedbackMessage = document.querySelector('#feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]
    
    function showErrosMessage (msg, cb) {
        // alert(msg)
        // feedbackMessage.setAttribute('class', 'show')
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent = msg

        function hideErrorMessage () {
            console.log('clicado close')
            feedbackMessage.classList.remove('show')
            //O classList manipula classes de varios modos

            //por criar o evento dentro da funçao, sempre ta criando um evento, ai para isso precisa remover o evento com o removeEventListener()
            feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
        
            
            if (typeof cb === 'function') {
                cb()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)


    
    }




    //Contar caracteres
    const txtDescricao      = document.querySelector('#txtDescricao')
    const contadorContainer = document.querySelector('#contador')
    const resta             = contadorContainer.getElementsByTagName('span')[0]
    const maxima            = txtDescricao.maxLength
    mostrarNumero(maxima)
    
    function mostrarNumero(n) {
        resta.textContent = n
    }
    
    contadorContainer.style.display = 'block'
    txtDescricao.addEventListener('input', function () {
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumero(caracteresRestantes)
    })


    btn.disabled = true

    const chkAceito = document.getElementById('chkAceito')
    chkAceito.addEventListener('change', function () {
        btn.disabled = !this.checked
    })



})()