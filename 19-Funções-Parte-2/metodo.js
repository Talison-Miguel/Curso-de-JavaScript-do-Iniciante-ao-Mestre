//metodos sao funçoes dentro de objetos

const animal3 = 'leao'

function miar() {
    console.log(this.name, 'falau: miau')
}

const dog = {
    name: 'rex',
    falar() {
        console.log(this.name, 'falau: au au')
    }, 
    falar2() {
        console.log('falou dinovo')
    }
}

const cat = {
    name: 'mingau',
    falar: miar
}

dog.falar()
dog.falar2()
cat.falar()