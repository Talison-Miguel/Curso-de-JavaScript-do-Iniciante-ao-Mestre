'use strict'

const itemImput      = document.querySelector('#item-input')
const btnAddItemForm = document.querySelector('#todo-add')
const ul             = document.querySelector('#todo-list')
const lis = ul.getElementsByTagName('li')


//Criando funçao pra criar os elementos, o <li> e o <p>, e adiciona na <ul>
function addTask(task){
    const li = document.createElement('li')
    li.className = 'todo-item'
    
    const p = document.createElement('p')
    p.className = 'task-name'
    p.textContent = task

    li.appendChild(p)
    ul.appendChild(li)

    li.addEventListener('click', function () {
        console.log(this)
        console.log(this.textContent)
        console.log(this.innerText)
        console.log(this.innerHTML)
        console.log(this.outerHTML)
        
    })
}

//Adicionado um item na lista
btnAddItemForm.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(itemImput.value)

    addTask(itemImput.value)

    //Limpar e focar no mesmo input depois de add
    itemImput.value = ''
    itemImput.focus()
});

// ... criou um array com todos os elementos, e faz o for eache neles com evento em cada um
[...lis].forEach(element => {
    element.addEventListener('click', function (event) {
        console.log(this)
        console.log(this.textContent)
        console.log(this.innerText)
        console.log(this.innerHTML)
        console.log(this.outerHTML)
    })
});