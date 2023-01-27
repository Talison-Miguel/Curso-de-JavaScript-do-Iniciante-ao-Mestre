//npm i -D @babel/core@7.12.10 @babel/cli@7.12.10 @babel/preset-env@7.12.11
//npx babel src -d dist -w
//npx babel src -d dist --presets=@babel/env -w

//axios _ vc passa axios.method(url), isso depois de importar, e muda de .json() para .data  a reposta

import axios from 'axios'

const teste1 = 'Teste babel'

const arrowFn = n => n * n
console.log(arrowFn(2))


const getAdress = async (cep) => {
    let url = `http://viacep.com.br/ws/${cep}/json/`

    try {
        const resposta = await axios.get(url)
        const json = resposta.data
        return json
    } catch(e) {
        throw e
    }
}

console.log('teste')
getAdress("36909-700").then(data => console.log(data))