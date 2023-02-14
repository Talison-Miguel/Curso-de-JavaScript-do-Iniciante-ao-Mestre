const fs = require('fs')

const md = `
# Este é um conteudo criado dinamicamente

* item 1
* item 2
`

const users = [{ name: 'Talison', lastname: 'Miguel' }]

fs.writeFile('./files/teste.md', md.trim(), err => {
    if(err) {
        throw err
    }

    console.log('saved file')
})

const createDados = () => {
    fs.writeFile('./dados/dados.json', JSON.stringify(users), err => {
        if(err) {
            throw err
        }
    
        console.log('saved json file')
    })
}

if(!fs.existsSync("dados")) {
    fs.mkdir("dados", err => {
        if(err) throw err

        createDados()
    })
} else {
    createDados()
}
