function Animal(tipo) {
    if(tipo) this.tipo = tipo
}

Animal.prototype.obterTipo = function() {
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'


function Cachorro(nome, tipo) {
    this.nome = nome
    //para herdar de outra funçao passa ela com os argumentos(this, outro parametro)
    Animal.call(this, tipo)

    // this.constructor = Cachorro
    //define a propiedade, valor e se é enumerada ou nao
    Object.defineProperty(Cachorro.prototype, 'constructor', {
        value: Cachorro,
        enumerable: false
    })
}

//Definir cachorro como uma função de Animal usando o prototype
Cachorro.prototype = new Animal()

let rex = new Cachorro('Rex', 'mamifero')
console.log(rex)

//Loop for in
for(let prop in rex) {
    //verifica se a propiedade faz parte do propio objeto
    if(rex.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

console.log('------------')

//verifica se ele é uma instacia de um animal, se tem essa prototype propiedade na cadeia de prototypo
console.log(rex instanceof Animal)

//verifica se o objeto Cachorro é prototypo de rex
console.log(Cachorro.prototype.isPrototypeOf(rex))

//pega o prototype dele
console.log(Object.getPrototypeOf(rex))
console.log(rex.__proto__)