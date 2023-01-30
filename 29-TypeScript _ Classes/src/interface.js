"use strict";
class Animall {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
class Cachorroo {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log('Detalhe do cachorro!');
        console.log(this.nome);
        console.log(this.idade ? this.idade + 1 : '');
        console.log(this.categoria);
    }
    latir() {
        console.log('O cachorro esta latido: ' + 'auauauauau');
    }
}
const dog = new Cachorroo('mamifero', 'Toto', 3);
console.log(dog);
dog.latir();
console.log('---------------------------------');
const laica = {
    categoria: 'mamifero',
    mostrarDetalhes() {
        console.log('laica');
    },
    idade: 2
};
console.log('laica', laica);
console.log('---------------------------------');
class Gatoo extends Animall {
    constructor(nome, idade) {
        super("Mamifero");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log('mostrar detalhe chamado');
    }
}
const mingau = new Gatoo('mingau', 5);
console.log(mingau);
mingau.mostrarDetalhes();
