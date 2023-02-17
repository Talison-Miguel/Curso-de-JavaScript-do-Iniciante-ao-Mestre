const http = require("http")
const fs = require("fs")

http.createServer( (requisicao, resposta) => {   

        switch(requisicao.url) {
            case "/": 
            case "/index.html":
                return fs.readFile("./index.html", (err, html) => {
                    if(err) {
                        resposta.writeHead(500)
                        resposta.end("<h1>Error</h1>")
                    }
                    resposta.writeHead(200, {"Content-Type": "text/html"})
                    const convertToTemplate = new Function("return `" + html +"`")
                    resposta.end(convertToTemplate.call(requisicao))
                })
            case "/estilo/estilo.css":
                resposta.writeHead(200, {"Content-Type": "text/css"})
                return resposta.end("body {color: red;}")
            case "/img/logo.jpg":
                resposta.writeHead(200, {"Content-Type": "image/jpg"})
                return fs.createReadStream("./logo.jpg").pipe(resposta)
            default: 
                resposta.writeHead(404, {"Content-Type": "image/html"})
                resposta.end("<h1>401</h1>")


        } 
        
} ).listen(3000)

console.log("Servidor Rodando na porta 3000 \nhttp://localhost:3000")

