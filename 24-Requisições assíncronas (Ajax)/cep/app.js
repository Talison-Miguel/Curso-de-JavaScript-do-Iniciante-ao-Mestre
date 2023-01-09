const inputCep = document.querySelector('#inputCEP')
inputCep.addEventListener("input", function(e) {
    let cep = this.value
    cep = cep.replace("-","")
    if(cep.length >= 8) {
        const promise = obterEndereco(cep)
            .then(dado => {
                if(dado.erro) throw Error("Cep inexistente")
                mostrarEndereco(dado)
            })
            .catch(err => { 
                mostrarErro(err.message)
            })
    }
})

function mostrarErro(erro) {
    document.querySelector('#bs-feedback .content').textContent = erro
    document.querySelector('#bs-feedback').style.transform = "translateY(0)"

    document.querySelector('#bs-feedback .close').addEventListener("click", () => {
        esconderErro()
    })
}

function esconderErro() {
    document.querySelector('#bs-feedback').removeAttribute("style")
}

function mostrarEndereco({cep, logradouro, bairro, localidade, uf}) {
    let inputs = document.querySelectorAll('.form-control')

    inputs[0].value = cep
    inputs[1].value = logradouro
    inputs[3].value = bairro
    inputs[4].value = localidade
    inputs[5].value = uf
}

async function obterEndereco(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json`

    try {
        const response = await fetch(url)
        const responseJson = !response.ok ? Error("CEP Invalido") : response.json()
        return responseJson
    } catch (error) {
        throw Error("Algo deu errado com o servidor")
    }
    
}