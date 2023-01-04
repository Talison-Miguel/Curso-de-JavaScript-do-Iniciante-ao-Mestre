import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { Task } from "../Model/Task.model.js"   

const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

export class TasksService {
    constructor() {
        this.tasks = []
    }

    add(task, cb, userId) {
        if(!task instanceof Task) {
            throw TypeError("task must be an instace of Task")
        }
        const fn = () => {
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, JSON.stringify(task))
    }

    getTasks(userId, cb) {
        //ja preenchendo as tarefas por aqui mesmo nessa funçao
        const fn = (dados) => {
            this.tasks = dados.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })
            if(typeof cb === "function") cb(this.tasks)
        }
        createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn)
    }

    remove(id, cb, userId) {
        const fn = () => {
            this.getTasks(userId, cb)
        }

        createXMLHttpRequest("DELETE", `${urlTasks}/${id}`, fn)
    }

    update(id, cb, userId, title) {
        const task = this.tasks[id - 1]
        task.title = title

        const fn = () => {
            this.getTasks(userId, cb)
        }

        createXMLHttpRequest("PATCH", `${urlTasks}/${id}`, fn, JSON.stringify(task))
    }

    check(id, cb, userId) {
        const task = this.tasks[id - 1]
        if(task.completed === false) {
            task.completed = true
        } else {
            task.completed = false
        }

        const fn = () => {
            this.getTasks(userId, cb)
        }

        createXMLHttpRequest("PATCH", `${urlTasks}/${id}`, fn, JSON.stringify(task))
    }
}