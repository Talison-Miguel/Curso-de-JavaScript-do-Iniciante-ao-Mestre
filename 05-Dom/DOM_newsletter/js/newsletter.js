const txtEmail    = document.querySelector("#txtEmail")
let btn           = document.querySelector(".btn")
const msgFeedback = document.querySelector("#newsletterFeedback")

function cadastrasEmail () {
    let email         = txtEmail.value
    console.log("cadastrasEmail")
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}

btn.addEventListener("click", cadastrasEmail)
