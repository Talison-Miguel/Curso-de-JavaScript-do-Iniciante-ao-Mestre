import { Task } from "./Model/Task.model.js"
import { createXMLHttpRequest } from "./createXMLHttpRequest.js"
import { TasksController } from "./Controller/Tasks.controller.js"
import { TasksView } from "./View/Tasks.view.js"
import { TasksService } from "./Service/Task.service.js"

const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

const userId = 2
const ul = document.getElementById("todo-list")

const taskService = new TasksService()
const tasksView = new TasksView(ul)
const tasksController = new TasksController(taskService, tasksView)


//ARMAZENAR O DOM EM VARIAVEIS
const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")

const lis = ul.getElementsByTagName("li")




taskService.getTasks(userId, init)

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()
    tasksController.add(itemInput.value, userId)

    itemInput.value = ""
    itemInput.focus()
});


function init(arrInstancesTasks) {
    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks
    if(arrInstancesTasks.error) return

    tasksView.render(taskService.tasks)


    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";


            },
            deleteButton: function () {
                const id = currentLi.getAttribute("data-id")
                tasksController.remove(id, userId)
            },
            containerEditButton: function () {
                const id = currentLi.getAttribute("data-id")
                const title = currentLi.querySelector(".editInput").value
                tasksController.update(title, userId, id)
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getTitle()
            },
            checkButton: function () {
                const id = currentLi.getAttribute("data-id")
                tasksController.check(userId, id)
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    
    ul.addEventListener("click", clickedUl)

}