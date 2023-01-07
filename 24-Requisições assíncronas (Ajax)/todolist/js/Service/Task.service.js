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

    getTasks(userId, sucess, erro) {
        //ja preenchendo as tarefas por aqui mesmo nessa funçao
        const fn = (arrTasks) => {
            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if(typeof sucess === "function") sucess(this.tasks)
            return this.tasks
        }
        //then _ tipo um entao, oque vai fazer com a resposta da promise
        //catch _ se der erro, retorna essa funçao
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

    remove(id, cb, error, userId) {
        createFetch("DELETE", `${urlTasks}/${id}`)
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch(err => error(err.message))
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