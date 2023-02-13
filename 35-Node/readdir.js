//fs __ LEITURA DE PASTAS, COM ARQUIVOS DENTRO DELAS, OU SO ARQUIVO

const fs = require('fs')
const path = require('path')

// console.log(path.basename(__filename))
// const files = fs.readdirSync("./files")
// console.log(files)


console.log("_______arquivo lido_______")
// fs.readdir __ le toda pasta
const filemd = fs.readFile('./files/README.MD', 'UTF-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content)
})



const fileimg = fs.readFile('./files/banner.jpg', (err, files) => {
    if(err) {
        throw err
    }


    console.log(files)
})


console.log("iniciando leitura de diretorio")
