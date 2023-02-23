const path = require('path')
const express = require('express');

const app = express()

// app.get("/", (request, response) => {
//     response.send("Ola mundo")
// })

//o servidor estatico para a rota "/"
app.use(express.static("static"))

//o servidor estatico para a rota "/images"
// app.use("/images", express.static("images")) relativo ao local onde foi execultado o servidor (comando do node)
app.use("/images", express.static(path.join(__dirname, "images")))

// app.get("*", (request, response) => {
//     response.sendFile(path.join(__dirname, "404.html"))
// })

app.get("*", (request, response) => {
    if(request.accepts("html")) {
        response.status(404).sendFile(path.join(__dirname, "404.html"))
    }
})

app.listen(3001)




console.log(`http://localhost:3001`)