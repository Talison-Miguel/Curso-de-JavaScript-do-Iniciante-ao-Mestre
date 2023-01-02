import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { Task } from "../Model/Task.model.js"   

const urlUsers = "http://localhost:3000/users"

export default class TasksService {
    constructor() {
        this.tasks = []
    }

    add(task) {

        if(!task instanceof Task) {
            throw TypeError("task must be an instace of Task")
        } else {
            this.tasks.push(task)
        }
        
    }

    getTasks(userId, callback) {
        createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, callback)
    }
}