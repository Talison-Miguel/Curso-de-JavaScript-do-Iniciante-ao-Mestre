'use strict'

const itemImput      = document.querySelector('#item-input')
const btnAddItemForm = document.querySelector('#todo-add')
const ul             = document.querySelector('#todo-list')


//Adicionado um item na lista

btnAddItemForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(itemImput.value)

    ul.innerHTML += `
    <li class="todo-item">
        <p class="task-name">${itemImput.value}</p>
    </li>
    `

    //Limpar e focar no mesmo input depois de add
    itemImput.value = ''
    itemImput.focus()
})