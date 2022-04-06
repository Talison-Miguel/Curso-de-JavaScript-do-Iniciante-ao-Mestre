//OBS _ voce pode criar uam funçao dentro do objeto,  para interar com os objetos
//so criar uma propiedade que aponta pra uma função


function changeName(name) {
    this.name = name  

    //voce ta pegando o propio obj, e mudando a sua data
    this.updatedAt = new Date()
}

const task1 = {
    name: 'task 1',
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName
}

const task2 = {
    name: 'task 2',
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

task1.name = 'task 1 updated'
task1.updatedAt = new Date()

task1.changeName('Nome Atualizado task1')
task2.changeName('Novo Nome task2')

// console.log(task1)
console.log(task2)

