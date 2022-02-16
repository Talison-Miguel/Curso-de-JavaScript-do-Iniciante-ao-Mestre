const txtEmail = document.getElementById("txtEmail")
const btn      = document.querySelector("#btn")

function editarEmail () {
    txtEmail.disabled = false
    txtEmail.focus()
}

function disableEmail () {
    txtEmail.disabled = true
}

btn.addEventListener("click", editarEmail)
txtEmail.onblur =  disableEmail