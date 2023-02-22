const http = require("http")
const fs = require("fs")
const path = require("path")

const getStaticFile = (url, type, response) => {
    if(!fs.existsSync(url)) {
        response.writeHead(404)
        console.log(url, "nao existe")
        if (type === "text/html") {
            url = path.join(__dirname, "static", "404.html")
        } else {
            return response.end()
        }
    } else {
        response.writeHead(200, { "Content-Type": type })
    }

    fs.createReadStream(url).pipe(response).on("error", () => {
        response.writeHead(500)
        response.end()
    }).on("finish", () => {
        console.log("finish")
    })
}

const mimetype = {
    "css": "text/css",
    "html": "text/html",
    "jpg": "image/jpg",
    "js": "application/javascript"
}

const serverStaticFile = (url, response) => {
    const _path = path.join(__dirname, "static", url)
    const extname = path.extname(url).substring(1)
    console.log(_path)
    console.log(extname)
    getStaticFile(_path, mimetype[extname], response)
}
http.createServer( (request, response) => {
    console.log(request.url)
    let url = request.url

    switch(url) {
        case "/":
        case "/index.html":
            serverStaticFile("/index.html", response)
            break
        case "/favicon.ico":
            response.end()
        case "/login":
            if(request.method.toLocaleLowerCase() === "post") {
                let body = ""
                request.on("data", data => body += data)
                request.on("end", () => console.log(body))
            }
            getStaticFile("./login.html", mimetype.html, response)
            break
        default: 
            serverStaticFile(url, response)
    }
}).listen(3001)

console.log("Servidor Rodando na porta 3001 \nhttp://localhost:3001")