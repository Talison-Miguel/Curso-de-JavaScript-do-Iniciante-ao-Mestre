const fs = require('fs')
const dado = require("./dados/dados.json")


dado.push({
    name: 'maria',
    lastname: 'souza'
})

fs.writeFile("./dados/dados.json", JSON.stringify(dado), err => {})