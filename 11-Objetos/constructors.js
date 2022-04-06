//o new cria um objeto

function Task(name) {
    'use strict'
    if(this === undefined) return

    let _name = name

    //tudo que for colocado this.propiedde vai ver adicionado por esse objeto recem criado pelo operador new

    this.createdAt = new Date()
    this.updateAt = null
    this.changeName = function(newName) {
        if(newName) {
            _name = newName
            this.updateAt = new Date()
        }
    }

    this.getName = function() {
        return _name
    }
}


const task1 = new Task('minha tarefa')
task1.changeName('minha tarefa atualizada')

const task2 = new Task('minha segunda tarefa')

// console.log(task1.getName())

// task1.changeName()
// console.log(task1.getName())
// console.log(task1)

console.log(task2)
// console.log(createdAt)



