import { createFetch } from "../createFetch.js"
import { Task } from "../Model/Task.model.js"   
import { urlUsers, urlTasks } from "../config.js"

export class TasksService {
    constructor() {
        this.tasks = []
    }

    add(task, cb, error, userId) {
        createFetch("POST", `${urlUsers}/${userId}/tasks`, JSON.stringify(task))
        .then(() => this.getTasks(userId))
        .then(() => cb())
        .catch(err => error(err))
    }

    async getTasks(userId, sucess, erro) {
        console.log("teste")
        //await é tipo pra esperar
        const teste = await createFetch("GET", `${urlUsers}/${userId}/tasks`)
            .then(response => {
                return response
            })
        console.log(teste)
        console.log("teste 2")


        const fn = (arrTasks) => {
            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if(typeof sucess === "function") sucess(this.tasks)
            return this.tasks
        }

        return createFetch("GET", `${urlUsers}/${userId}/tasks`)
            .then(response => {
                return fn(response)
            })
            .catch(error => {
                if(typeof erro === "function") {
                    return erro(error.message)
                }
                throw Error(error.message)
            })
    }

    async remove(id, cb, error, userId) {
        try {
            createFetch("DELETE", `${urlTasks}/${id}`)
            await this.getTasks(userId)
            cb()
        } catch (err) {
            error(err.message)
        }
            // .then(() => this.getTasks(userId))
            // .then(() => cb())
            // .catch(err => error(err.message))
    }

    update(task, cb, error, userId) {
        task.updatedAt = Date.now()
        
        createFetch("PATCH", `${urlTasks}/${task.id}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch(err => error(err.message))
    }

    check(id, cb, error, userId) {
        const task = this.tasks[id - 1]

        //inverte, true/false com o click
        task.completed = !task.completed
        task.updatedAt = Date.now()

        createFetch("PATCH", `${urlTasks}/${id}`, JSON.stringify(task))
        .then(() => this.getTasks(userId))
        .then(() => cb())
        .catch(err => error(err.message))
    }
}