abstract class Animall {
    constructor(protected readonly categoria: string) {}

    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

interface AnimalProps {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number
}

interface DogProps {
    latir(): void
}

class Cachorroo implements AnimalProps, DogProps {
    constructor(public categoria: string, public readonly nome: string, public idade?: number) {}

    mostrarDetalhes(): void {
        console.log('Detalhe do cachorro!')
        console.log(this.nome)
        console.log(this.idade ? this.idade + 1 : '')
        console.log(this.categoria)
    }

    latir(): void {
        console.log('O cachorro esta latido: ' + 'auauauauau')
    }
}

const dog = new Cachorroo('mamifero', 'Toto', 3)
console.log(dog)
dog.latir()
console.log('---------------------------------')

const laica: AnimalProps = {
    categoria: 'mamifero',
    mostrarDetalhes() {
        console.log('laica')
    },
    idade: 2
}   
console.log('laica', laica)
console.log('---------------------------------')

class Gatoo extends Animall {
    constructor(public nome: string, public idade: number) {
        super("Mamifero")
    }

    mostrarDetalhes() {
        console.log('mostrar detalhe chamado')
    }
}

const mingau = new Gatoo('mingau', 5)
console.log(mingau)
mingau.mostrarDetalhes()


console.log('---------------------------------')
//Type

interface Pessoa {
    name: string
}

interface Pessoa {
    idade: number
}

const daniel: Pessoa =  {
    name: 'dani',
    idade: 12
}

console.log(daniel)

//Type para tipos primitivos, com union |
type TesteType = number | {quantidade: number}
const idade: TesteType = {quantidade: 2}

type Cors = 'Red' | 'Blue' | 'Grenn'
const cor: Cors = 'Red'


type Soma = (x: number, y: number) => number

interface SomaInterface {
    (x: number, y:number): number
}

const somar: SomaInterface = (x, y) => x + y
console.log('soma: ', somar(2,3))