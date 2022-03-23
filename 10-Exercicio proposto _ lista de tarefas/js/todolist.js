'use strict'

const itemImput      = document.querySelector('#item-input')
const btnAddItemForm = document.querySelector('#todo-add')
const ul             = document.querySelector('#todo-list')

//um array de objetos _ Uma estrutura de dados
let arrTasks = [
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


// //adiciona o click em cada li
// function addEventLi (li) {
//     li.addEventListener('click', function () {
//         console.log(this)      
//     })
// }


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
    checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
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
}

function clickeUl (event) {
    //event.targe _ onde foi clickado dispara o evento
    console.log(event.target)
    //pega o valor do atributo
    console.log(event.target.getAttribute('data-action'))


    //objeto com a funçao que ira fazer de tal atributo
    const actions = {
        checkButton: function (){
            console.log('checkButton no objeto')
        },
        editButton: function () {
            console.log('editButton no objeto')
        },
        deleteButton: function () {
            console.log('deleteButton no objeto')
        }
    }

    //pega o dataAction com o event.target, onde clicka
    const dataAction = event.target.getAttribute('data-action')
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
    addTask(itemImput.value)
    renderTasks ()

    itemImput.value = ''
    itemImput.focus()
});

//eventos de click na ul, pelo atributo adicionado
ul.addEventListener('click', clickeUl)

renderTasks ()