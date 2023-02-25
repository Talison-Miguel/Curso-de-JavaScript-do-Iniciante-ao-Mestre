const repository = require('./../repository/tasks_repository')
const tasks = require("./../../data/tasks.json")

exports.get = async (request, response) => {
    try {
        let tasks = await repository.get()
        response.status(200).send(tasks)
    } catch (error) {
        response.status(500).send({
            message: "Error 500", 
            err: error
        })
    }
}

exports.post = async (request, response) => {
    const { title, userId } = request.body
    const newTask = {
        title: title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId: userId,
    }

    try {
        const data = await repository.post
        tasks.push(data)
        response.status(201).send(newTask)
    } catch (error) {
        response.status(500).send({
            message: "Error 500", 
            err: error
        })
    }
}

exports.getById = async (request, response) => {
    response.send(tasks.find(task => task.id === parseInt(request.params.id)))
}

exports.put = async (request, reponse) => {
    const  { title, completed, createdAt, updatedAt, id, userId } = request.body
    const newTask = { title, completed, createdAt, updatedAt, id, userId }
    const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))
    
    tasks.splice(taskIndex, 1, newTask)
    response.send(newTask)
}

exports.patch = async (request, response) => {
    const { title, completed, userId } = request.body
    const taskById = tasks.find( task => task.id === parseInt(request.params.id))
    const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))

    const updatedAt = Date.now()
    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if(typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    const editTask = { ...taskById, ...taskUpdated }

    tasks.splice(taskIndex, 1, editTask)
    response.send(editTask)
}

exports.delete = async (request, response) => {
    const taskIndex = tasks.findIndex( task => task.id === parseInt(request.params.id))
    const deleteTask = tasks.splice(taskIndex, 1)

    response.send(deleteTask)
}