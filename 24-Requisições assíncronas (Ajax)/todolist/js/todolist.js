import { TasksController } from "./Controller/Tasks.controller.js"
import { TasksView } from "./View/Tasks.view.js"
import { TasksService } from "./Service/Task.service.js"

const ul = document.getElementById("todo-list")

const taskService = new TasksService()
const tasksView = new TasksView(ul)
const tasksController = new TasksController(taskService, tasksView)


//ARMAZENAR O DOM EM VARIAVEIS
const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")
const lis = ul.getElementsByTagName("li")


tasksController.getTasks()


todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()
    tasksController.add(itemInput.value)

    itemInput.value = ""
    itemInput.focus()
});


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
            tasksController.remove(id)
        },
        containerEditButton: function () {
            const id = currentLi.getAttribute("data-id")
            const title = currentLi.querySelector(".editInput").value
            tasksController.update({title, id})
        },  
        containerCancelButton: function () {
            currentLi.querySelector(".editContainer").removeAttribute("style")
            currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].title
        },
        checkButton: function () {
            const id = currentLi.getAttribute("data-id")
            tasksController.check(id)
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}

ul.addEventListener("click", clickedUl)



//codigos de exemplo

// fetch("http://localhost:3000/users")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finaly"))

;(async function(){
    let users = []

    try {
        await fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(_users => {
                console.log(_users)
                users = _users
            })
    } catch (error) {
        console.log(error.message)
    }

    console.log(users)


})()