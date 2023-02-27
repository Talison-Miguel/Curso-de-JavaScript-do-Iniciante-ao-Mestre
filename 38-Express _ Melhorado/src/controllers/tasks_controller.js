const repository = require('./../repository/tasks_repository')
const tasks = require("./../../data/tasks.json")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId
    }

    // tasks.push(newTask)
    try {
        const data = await repository.post(newTask)
        res.status(201).send(data)
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.getById = async (req, res) => {
    // res.send(tasks.find(task => task.id === parseInt(req.params.id)))
    try {
        const data = await repository.get(parseInt(req.params.id))
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }
}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, userId } = req.body
    const newTask = { title, completed, createdAt, updatedAt, id: parseInt(req.params.id), userId }

    try {
        const data = await repository.put(newTask, req.params.id)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

    res.status(200).send(newTask)
}

exports.patch = async (request, response) => {
    const { title, completed, userId } = request.body
    
    const data = repository.path({title, completed, userId}, request.params.id)
    try {
        response.status(200).send(data)
    } catch (error) {
        res.status(500).send({ message: "erros 500", err: e })
    }
    
    
}

exports.delete = async (request, response) => {
    try {
        const data = await repository.delete(request.params.id)

        response.status(200).send(data)
    } catch (error) {
        res.status(500).send({ message: "erros 500", err: e })
    }

    
}