//é uma clase que nao pode ser usada diretamente
class Animal {
    //sempre sera execultado
    constructor(tipo) {
        if(this.constructor === Animal) {
            throw new Error('Animal is an abstract class')
        }

        if(tipo) {
            this.tipo = tipo
        }
    }

    comer() {
        throw new Error('method "comer()" must be implemented')
    }
}

//herdar usar extends
class Gato extends Animal {
    constructor(nome) {
        //super _ exelcultará a funçao que herdou
        super('mamifero')
        this.nome = nome
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }
}

// const animal = new Animal('mamifero')
const mingal = new Gato('mingal')