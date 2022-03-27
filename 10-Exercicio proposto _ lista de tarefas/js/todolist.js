'use strict'

const itemImput      = document.querySelector('#item-input')
const btnAddItemForm = document.querySelector('#todo-add')
const ul             = document.querySelector('#todo-list')
const lis = ul.getElementsByTagName('li')



//um array de objetos _ Uma estrutura de dados
let arrTasks = getSavedData()

function getSavedData () {
    //converteu em string
    let tasksData = localStorage.getItem('tasks')

    //converteu para obj dnv
    tasksData = JSON.parse(tasksData)
    console.log(tasksData)

    //Se tiver uma task e length retorna ela, se nao a array normal
    return tasksData && tasksData.length ? tasksData : [
        {
            name: 'task 1',
            createAt: Date.now(),
            completed: false
        },
        {
            name: 'task 2',
            createAt: Date.now(),
            completed: false
        }
    ]


}

//atualiza o local storage
function setNewData () {
    localStorage.setItem('tasks', JSON.stringify(arrTasks))
}

setNewData()




//gerar li e retorna ela _ recebe o obj da estrutura de dados
function generateLiTask (obj) {
    //Cria os elementos html
    const li = document.createElement('li')
    const p = document.createElement('p')
    const checkButton = document.createElement('button')
    const editButton = document.createElement('i')
    const deleteButton = document.createElement('i')

    li.className = 'todo-item'

    checkButton.classList = 'button-check'
    checkButton.innerHTML = `
    <i class="fas fa-check ${obj.completed ? '' : 'displayNone'}" data-action="checkButton"></i>`
    checkButton.setAttribute('data-action', 'checkButton')
    li.appendChild(checkButton)

    p.className = 'task-name'
    p.textContent = obj.name
    li.appendChild(p)

    editButton.className = 'fas fa-edit'
    editButton.setAttribute('data-action', 'editButton')
    li.appendChild(editButton)

    const containerEdit = document.createElement('div')
    containerEdit.className = 'editContainer'
    const inputEdit = document.createElement('input')
    inputEdit.setAttribute('type', 'text')
    inputEdit.className = 'editInput'
    inputEdit.value = obj.name

    containerEdit.appendChild(inputEdit)
    const containerEditButton = document.createElement('button')
    containerEditButton.className = 'editButton'
    containerEditButton.textContent = 'Edit'
    containerEditButton.setAttribute('data-action', 'containerEditButton')
    containerEdit.appendChild(containerEditButton)
    const containerCancelButton = document.createElement('button') 
    containerCancelButton.className = 'cancelButton'
    containerCancelButton.textContent = 'Cancel'
    containerCancelButton.setAttribute('data-action', 'containerCancelButton')
    containerEdit.appendChild(containerCancelButton)

    li.appendChild(containerEdit)

    deleteButton.className = 'fas fa-trash-alt'
    deleteButton.setAttribute('data-action', 'deleteButton')
    li.appendChild(deleteButton)

    // addEventLi(li)

    return li
}

//limpa e acrescenta as li  _ dependendo do resultado da funçao generateLiTask e gera uma li
function renderTasks () {
    ul.innerHTML = ''
    arrTasks.forEach(taskObj => {
        ul.appendChild(generateLiTask(taskObj))
    });
}


//adiciona um obj na array
function addTask(task){
    arrTasks.push({
        name: task,
        createAt: Date.now(),
        completed: false
    })

    setNewData()
}

function clickeUl (event) {
    //objeto com a funçao que ira fazer de tal atributo
    //pega o dataAction com o event.target, onde clicka
    const dataAction = event.target.getAttribute('data-action')
    console.log(event.target)
    if(!dataAction) return

    let currentLi = event.target
    while (currentLi.nodeName !== 'LI') {
        currentLi = currentLi.parentElement
    }
    console.log(currentLi)
    const currentLiIndex = [...lis].indexOf(currentLi)
    console.log(currentLiIndex)


    //currentLi é onde foi clickado
    //currentLiIndex é o indice de onde foi clickado


    const actions = {
        editButton: function () {
            const editContainer = currentLi.querySelector('.editContainer');
            //vai passar por todos que tem a classe editContainer e remover, para depois que criar outro so ficar ele
            [...ul.querySelectorAll('.editContainer')].forEach( container => {
                container.removeAttribute('style')
            });

            editContainer.style.display = 'flex';

        },
        deleteButton: function () {
            arrTasks.splice(currentLiIndex, 1)
            console.log(arrTasks)
            renderTasks()
            setNewData()
            // currentLi.remove()
            // currentLi.parentElement.removeChild(currentLi)
        },
        containerEditButton: function () {
            const val = currentLi.querySelector('.editInput').value
            arrTasks[currentLiIndex].name = val
            renderTasks()
            setNewData()
        },
        containerCancelButton: function () {
            currentLi.querySelector('.editContainer').removeAttribute('style')
        
            currentLi.querySelector('.editInput').value = arrTasks[currentLiIndex].name
        },
        checkButton: function () {
            arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed

            // if (arrTasks[currentLiIndex].completed) {
            //     currentLi.querySelector('.fa-check').classList.remove('displayNone')
            // } else {
            //     currentLi.querySelector('.fa-check').classList.add('displayNone')
            // }

            setNewData()
            renderTasks()
        }
    }

    //se o action for o do target 'onde click', vc executa a funçao
    if(actions[dataAction]) {
        actions[dataAction]()
    }
}


//Adicionado um item na lista
btnAddItemForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(itemImput.value)

    // gera um obj com a propiedade value
    if (itemImput.value !== '') addTask(itemImput.value)

    renderTasks ()

    itemImput.value = ''
    itemImput.focus()
});

//eventos de click na ul, pelo atributo adicionado
ul.addEventListener('click', clickeUl)

renderTasks ()