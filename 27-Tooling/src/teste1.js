//npm i -D @babel/core@7.12.10 @babel/cli@7.12.10 @babel/preset-env@7.12.11
//npx babel src -d dist -w
//npx babel src -d dist --presets=@babel/env -w

const teste1 = 'Teste babel'

const arrowFn = n => n * n
console.log(arrowFn(2))

class Teste {
    constructor(n) {
        this.n = n
    }
}

console.log(new Teste(5))


const getAdress = async (cep) => {
    let url = `http://viacep.com.br/ws/${cep}/json/`

    try {
        const resposta = await fetch(url)
        if(!resposta.ok) throw Error("Invalid postal code!")
        const json = await resposta.json()
        return json
    } catch(e) {
        throw e
    }
}

const endereco = getAdress("36909-700")
console.log(endereco)