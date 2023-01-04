import { Task } from "../Model/Task.model.js"

export class TasksController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }

    add(title, userId) {
        this.service.add(new Task(title), () => this.view.render(this.service.tasks), userId)
        // this.service.taks
    }

    remove(id, userId) {
        this.service.remove(id, () => this.view.render(this.service.tasks), userId)
    }

    update(task, userId) {
        this.service.update(task, () => this.view.render(this.service.tasks), userId)
    }

    check(userId, id) {
        this.service.check(id, () => this.view.render(this.service.tasks), userId)
    }
}