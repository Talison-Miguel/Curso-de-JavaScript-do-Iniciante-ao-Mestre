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
    falar() {
        console.log(this)
        miar.call(this)
        //call(this) _ muda o this 
    }
}

dog.falar()
dog.falar2()
cat.falar()