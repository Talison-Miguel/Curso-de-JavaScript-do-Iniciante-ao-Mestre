import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { Task } from "../Model/Task.model.js"   

const urlUsers = "http://localhost:3000/users"

export class TasksService {
    constructor() {
        this.tasks = []
    }

    add(task, cb, userId) {
        if(!task instanceof Task) {
            throw TypeError("task must be an instace of Task")
        }
        const fn = (_task) => {
            const { title, completed, createdAt, updatedAt } = _task
            this.tasks.push(new Task(title, completed, createdAt, updatedAt))
            
            if(typeof cb === "function") cb()
        }
        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, JSON.stringify(task))
        
    }

    getTasks(userId, callback) {
        //ja preenchendo as tarefas por aqui mesmo nessa funçao
        const fn = (dados) => {
            this.tasks = dados.map(task => {
                const { title, completed, createdAt, updatedAt } = task
                return new Task(title, completed, createdAt, updatedAt)
            })
            callback(this.tasks)
        }
        createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn)
    }
}