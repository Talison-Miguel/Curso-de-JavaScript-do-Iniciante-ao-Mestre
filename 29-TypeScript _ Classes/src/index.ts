console.log('_______________')

//longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }


//curta
abstract class Animal {
    //public deixa a variavel publica nessa classe
    //readonly deixa ler o valor da propiedade fora, mais n pode mudar  fora da classe
    //n pode mudar  fora da classe, so na classe
    //protected , nao pode ler fora da classe, 
    constructor(protected readonly categoria: string) { }

    mostrarCategoria(): void {
        console.log(`A categoria é: ${this.categoria}.`)
    }
}


// const animal = new Animal('mamifero')
// console.log(animal)
// animal.mostrarCategoria()

console.log('-----------------------------')

class Gato extends Animal {
    private    nome: string
    constructor(nome: string) {
            super("mamifero")
            this.nome = nome
    } 

    mostrardetalhes(): void {
        console.log(this.nome, ' : ', this.categoria)
    }
}

const gatinho = new Gato('pretim')
console.log(gatinho)
gatinho.mostrardetalhes()


console.log('-----------------------------')

class Cachorro extends Animal {
    constructor(private _nome: string){
        super("mamifero")
    }

    get nome() {
        console.log("get chamado ")
        return this._nome
    }

    set nome(n: string) {
        console.log('set chamado ____')
        this._nome = n
    }

    mostrarDetalhes(): void {
        console.log(this._nome + " é um " + this.categoria)
    }
}

const doguinho = new Cachorro("Rex")
doguinho.mostrarDetalhes()
doguinho.mostrarCategoria()
doguinho.nome = "Novo nome do toto"
console.log(doguinho.nome, "toto")
