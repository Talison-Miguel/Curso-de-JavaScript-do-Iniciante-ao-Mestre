const obj1 = {
    nome: 'talison'
}

const obj2 = {
    nome: 'italo'
}

Object.defineProperty(obj2, 'nome', {
    writable: false,
    configurable: false
})
Object.preventExtensions(obj2)

Object.freeze(obj1)

console.log(Object.isFrozen(obj1))
console.log(Object.isFrozen(obj2))



