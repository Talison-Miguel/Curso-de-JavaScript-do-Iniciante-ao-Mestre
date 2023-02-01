class Pessoa<T> {
    constructor(private nome: T) {}

    setNome(nome: T) {
        this.nome = nome
    }
}

const talison = new Pessoa("talison")
talison.setNome("talison edit")


class List<T> {
    private list: T[] = []

    getFromList(index: number): T | null{
        const len = this.list.length
        if(len === 0) return null
        if(index > len || index < 0) return null

        return this.list[index]
    }

    removeFromList(index: number): T | null {
        const element = this.getFromList(index)
        if(element !== null) {
            this.list.splice(index, 1)
            return element
        }
    
        return null
    }

    addToList(element: T) {
        this.list.push(element)

        return this
    }
}

class Animal<T> {
    constructor(private nome: T) {}

    setNome(nome: T) {
        this.nome = nome
    }
}

const listPessoas = new List<Pessoa<string>>()
listPessoas.addToList(talison)
    .addToList(new Pessoa("miguel"))
    .addToList(new Pessoa('joao'))
    // .addToList(new Animal('toto'))   

const listAnimall = new List<Animal<string>>()
listAnimall.addToList(new Animal('toto'))
    .addToList(new Animal('cat'))
console.log('Animall', listAnimall)

console.log('--------------------------------------------')

console.log(listPessoas)
console.log('-------------')
listPessoas.removeFromList(1)
console.log(listPessoas)



