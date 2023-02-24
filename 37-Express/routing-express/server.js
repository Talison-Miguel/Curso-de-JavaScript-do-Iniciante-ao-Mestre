const express = require("express")
const tasks = require("./data/tasks.json")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/tasks", (request, response) => {
    response.send(tasks)
})

app.post("/tasks", (request, response) => {
    console.log(request.body)
    
    const { title, userId } = request.body
    const newTask = {
        title: title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId: userId,
        id: tasks[tasks.length - 1].id + 1
    }

    tasks.push(newTask)
    response.send(newTask)
    
})

app.route("/tasks/:id")
    .get((request, response) =>  {
        response.send(tasks.filter(task => task.id === parseInt(request.params.id)))
    })
    .put((request, response) => {
        const  { title, completed, createdAt, updatedAt, id, userId } = request.body
        const newTask = { title, completed, createdAt, updatedAt, id, userId }
        const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))
        
        tasks.splice(taskIndex, 1, newTask)
        response.send(newTask)
    })
    .patch((request, response) => {
        const { title, completed, userId } = request.body
        const taskById = tasks.filter( task => task.id === parseInt(request.params.id))[0]
        const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))

        const updatedAt = Date.now()
        const taskUpdated = { title, completed, userId, updatedAt }

        for (let prop in taskUpdated) {
            if(typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
        }

        const editTask = { ...taskById, ...taskUpdated }

        tasks.splice(taskIndex, 1, editTask)
        response.send(editTask)
    })
    .delete((request, response) => {
        const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))

        const deleteTask = tasks.splice(taskIndex, 1)

        response.send(deleteTask)
    })





app.listen(3001)