const pai = {
    nome: 'pai',
    falar: function(msg) {
        console.log(`${this.nome} esta falando`)
    }
}

//criar um objeto ligado ao objeto pai
const filho = Object.create(pai, { nome: {value: 'junior', enumerable: true}  })



//-------------

const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const obj2 = {
    b: 'b2',
    d: 'd2'
}
Object.defineProperty(obj2, 'naoEnumeravel', {
    value:'Nao enumeravel',
})

//Copie os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos
// de origem para um objeto de destino. Retorna o objeto de destino.
const filha = Object.assign({}, obj1, filho)

// const clone = Object.assign(obj2, obj1)
const obj5 = Object.assign({},obj2)
console.log(obj5)

obj2.teste = 'teste'

const obj3 = {...obj1, ...obj2}
const obj4 = {...obj2, ...obj1}
console.log(obj3)
console.log(obj4)




//-------------------------------------
console.log('---------------------------------------')

const obj = {
    b: 'B',
    d: 'D'
}
obj.teste = 'Valor teste'

Object.defineProperties(obj, {
    naoEnumeravel: {
        value:'Valor nao enumeravel',
    },
    enumeravel: {
        value: 'Valor enumeravel',
        enumerable: true
    }
})

console.log(obj)

console.log('------keys-------')
// retorna um array de propriedades enumeraveis de um determinado objeto
console.log(Object.keys(obj))

console.log('------values-------')
// retorna um array com os valores
console.log(Object.values(obj))

console.log('------entries-------')
// retorna um array bidimensional, um array dentro de uma array
console.log(Object.entries(obj))