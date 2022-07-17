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
//__ dica: nunca guardar no banco de dados o numero formatado, guarde o numero real



console.log("____________________")
//A propriedade Number.MAX_VALUE representa o maior valor numérico representável em JavaScript._ fixo: 1.7976931348623157e+308
//A propriedade Number.MIN_VALUE representa o menor valor positivo numérico representável em JavaScript._ fixo: 5e-324
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

//parseFloat _ transforma string em numero
let num = "100"
console.log(parseFloat(num))
console.log(Number.parseFloat("999"))

console.log(isFinite(2))
console.log(Number.isFinite("2"))


console.log("____________________")
//isNaN() __ determina se o valor é NaN ou não
let numeroAsString = "a3.456"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))
