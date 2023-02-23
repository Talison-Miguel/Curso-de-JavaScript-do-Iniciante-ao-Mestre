const express = require("express")
const tasks = require("./data/tasks.json")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/tasks", (request, response) => {
    response.send(tasks)
})

app.post("/tasks", (request, response) => {
    response.send(`POST para /tasks`)
    console.log(request.body)
})

app.listen(3001)