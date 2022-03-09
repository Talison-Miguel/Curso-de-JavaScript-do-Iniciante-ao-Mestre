//OBJETOS
console.log('-------OBJETOS------')
const pessoa = {
    nome: 'talison',
    sobrenome: 'miguel',
    idade: 40    
}

pessoa.idade = 40
pessoa.email = 'talisonmiguel@gmail.com'
//adicionar um obj

console.log(pessoa)

console.log('------INTERAR SOBRE UM OBJ-------')
// INTERAR SOBRE UM OBJ

//o prop_ é cada propiedade
//obj[prop]_ mostra os valores de cada propiedade
//for in_ é um loop pra objetos
for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}



console.log('------METODOS DE OBJETOS-------')
///METODOS DE OBJETOS

//this referese ao objeto global
const produto = {
    nome: 'caneta',
    qtd: 10,
    comprar: function (n) {
        console.log(this)
        //se o valor passado for maior que ovalor do estoque
        if (n > this.qtd) {
            return 'quantidade nao disponivel'
        }
        this.qtd -= n
    },
    teste1: function () {
        console.log('teste1')
        console.log(this)
    },
    teste2: () => {
        console.log('teste2')
        console.log(this)
    }
}
produto.comprar(3)
// console.log(produto)

produto.comprar(13)
// console.log(produto)

produto.teste1()
produto.teste2()