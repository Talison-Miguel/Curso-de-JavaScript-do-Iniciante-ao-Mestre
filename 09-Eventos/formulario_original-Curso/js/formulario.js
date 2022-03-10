(function () {
    "use strict";

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector('.formCadastro')
    
    // btn.addEventListener("click", function (e) {

    // })

    formCadastro.addEventListener('submit', function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showFeedback("preencha todos os campos")
            e.preventDefault()
            txtTitulo.focus()
        }
    })
    //submit, quando enviar as informaçoes pro servidor



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