'use strict'
const pessoa = {
    nome: 'talison'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

//usando o defineProperty consegue mudar o  descriotr, que confira se é configable, enumerable,etc
Object.defineProperty(pessoa, 'sobrenome', {
    value: 'Miguel',
    enumerable: true,
    configurable: true,
    writable: true
})
Object.defineProperty(pessoa, 'sobrenome', {
    configurable: false
})
Object.defineProperty(pessoa, 'sobrenome', {
    writable: false
})

Object.defineProperties(pessoa, {
    prop1: {
        value: 'prop1',
        writable: true
    },
    prop2: {
        writable: false,
        value: 10
    }
})

console.log(Object.getOwnPropertyDescriptor(pessoa, 'sobrenome'))

// delete pessoa.sobrenome
for(let prop in pessoa) {
    console.log(prop)
}

