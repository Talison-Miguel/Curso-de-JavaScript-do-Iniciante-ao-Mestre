import { Task } from "../Model/Task.model.js"
import { userId } from "../config.js"

export class TasksController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }

    add(title) {
        this.service.add(new Task(title), () => this.view.render(this.service.tasks), userId)
    }

    remove(id) {
        this.service.remove(id, () => this.view.render(this.service.tasks), userId)
    }

    update(task) {
        this.service.update(task, () => this.view.render(this.service.tasks), userId)
    }

    check(id) {
        this.service.check(id, () => this.view.render(this.service.tasks), userId)
    }

    getTasks() {
        this.service.getTasks(userId, () => this.view.render(this.service.tasks))
    }
}