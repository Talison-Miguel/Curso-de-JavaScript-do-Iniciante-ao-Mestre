"use strict";
console.log('_______________');
//longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }
//curta
class Animal {
    //public deixa a variavel publica nessa classe
    //readonly deixa ler o valor da propiedade fora, mais n pode mudar  fora da classe
    //n pode mudar  fora da classe, so na classe
    //protected , nao pode ler fora da classe, 
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}.`);
    }
}
// const animal = new Animal('mamifero')
// console.log(animal)
// animal.mostrarCategoria()
console.log('-----------------------------');
class Gato extends Animal {
    constructor(nome) {
        super("mamifero");
        this.nome = nome;
    }
    mostrardetalhes() {
        console.log(this.nome, ' : ', this.categoria);
    }
}
const gatinho = new Gato('pretim');
console.log(gatinho);
gatinho.mostrardetalhes();
console.log('-----------------------------');
class Cachorro extends Animal {
    constructor(_nome) {
        super("mamifero");
        this._nome = _nome;
    }
    get nome() {
        console.log("get chamado ");
        return this._nome;
    }
    set nome(n) {
        console.log('set chamado ____');
        this._nome = n;
    }
    mostrarDetalhes() {
        console.log(this._nome + " é um " + this.categoria);
    }
}
const doguinho = new Cachorro("Rex");
doguinho.mostrarDetalhes();
doguinho.mostrarCategoria();
doguinho.nome = "Novo nome do toto";
console.log(doguinho.nome, "toto");
console.log('----------------------------');
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    addAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._tempListaAnimais];
    }
}
const talison = new Cliente();
talison.addAnimais(doguinho, gatinho);
talison.listaAnimais.length = 0;
console.log(talison);
