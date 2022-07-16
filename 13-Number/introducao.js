let numero = 1234567.890


//toFixed() _ retorna quantos numeros apos a casa decimal vai ficar, so que vira string
console.log(numero.toFixed(2))
console.log(typeof numero.toFixed(2))


console.log("____________________")
//toPrecision() _ retorna o numero de digitos que vc quer de um numero
console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(3))

console.log((12).toPrecision(6))


console.log("____________________")
//toExponential() _ retorna uma notação exponencial de base 10
let numero2 = 12.34567
console.log(numero2.toExponential())
console.log(numero2.toExponential(4))


console.log("____________________")
//toString() _ retorna uma string representando o objeto, com parametro ele retorna binário  0 e 1 de cada numero ou hexadecimal
let numero3 = 15

console.log(numero3.toString())
console.log(typeof numero3.toString())
console.log((3).toString(2))
console.log((15).toString(16))


//toLocaleString() _ converte o numero para a visao humana, com virgulas e pontos || ou moeda
//retorna uma string com uma representação sensível a linguagem deste número.
let numero4 = 123456.789
console.log(numero4.toLocaleString())
console.log(numero4.toLocaleString("pt-BR"))
console.log(numero4.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
//__ fica: nunca guardar no banco de dados o numero formatado, guarde o numero real