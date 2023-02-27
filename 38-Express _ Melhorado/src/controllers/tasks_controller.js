const repository = require('./../repository/tasks_repository')
const tasks = require("./../../data/tasks.json")

exports.get = async (request, response) => {
    try {
        let data = await repository.get(request.params.id)
        if(data) {
            response.status(200).send(data)
        } else {
            response.status(404).end()
        }
    } catch (e) {
        response.status(500).send({ message: "erros 500", err: e })
    }

}

exports.post = async (request, response) => {
    const { title, userId } = request.body

    if(!title || !userId || isNaN(userId)) {
        return response.status(400).send({ message: "error 400", err: "Error 400 requisição não formatada corretamente" })
    }

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId
    }

    try {
        const data = await repository.post(newTask)
        response.status(201).send(data)
    } catch (e) {
        response.status(500).send({ message: "erros 500", err: e })
    }
}

exports.getById = async (request, response) => {
    // response.send(tasks.find(task => task.id === parseInt(request.params.id)))
    try {
        const data = await repository.get(parseInt(request.params.id))
        if (data) {
            response.status(200).send(data)
        } else {
            response.status(404).end()
        }
    } catch (e) {
        response.status(500).send({ message: "erros 500", err: e })
    }
}

exports.put = async (request, response) => {
    const { title, completed, createdAt, updatedAt, userId } = request.body
    const newTask = { title, completed, createdAt, updatedAt, id: parseInt(request.params.id), userId }

    const values = Object.values(newTask)
    if(values.some(valor => valor === undefined)) {
        return response.status(400).send({ 
            message: "error 400", 
            err: "Error 400 requisição não formatada corretamente" 
        })
    }

    try {
        const data = await repository.put(newTask, request.params.id)
        if (data) {
            response.status(200).send(data)
        } else {
            response.status(404).end()
        }
    } catch (e) {
        response.status(500).send({ message: "erros 500", err: e })
    }
}

exports.patch = async (request, response) => {
    const { title, completed, userId } = request.body
    try {
        const data = await repository.patch({ title, completed, userId }, request.params.id)
        if (data) {
            response.status(200).send(data)
        } else {
            response.status(404).end()
        }
    } catch (error) {
        response.status(500).send({ message: "erros 500", err: error })
    }
}

exports.delete = async (request, response) => {
    try {
        const data = await repository.delete(request.params.id)

        if (data) {
            response.status(200).send(data)
        } else {
            response.status(404).end()
        }
    } catch (error) {
        response.status(500).send({ message: "erros 500", err: e })
    }
}