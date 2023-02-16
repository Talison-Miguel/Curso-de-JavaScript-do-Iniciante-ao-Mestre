const fs = require('fs')

const ws = fs.createWriteStream('./file.md', 'UTF-8')


ws.write("# Ola mundo")


const readStream = fs.createReadStream('./swapi.json', 'UTF-8')
const writeStream = fs.createWriteStream('./swapi_clone.json', 'utf-8')

//sempre que muda o data "dados" execulta o evento
// readStream.on('data', dados => {
//     writeStream.write(dados)
// })


//ligaçao entre as stream readStream e writeStream
//execulta a ligaçao e atualiza com write
readStream.pipe(writeStream).on('finish', () => {
    console.log('____________finish____________')
})

