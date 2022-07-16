let numero = 1234567.890


//toFixed() _ retorna quantos numeros apos a casa decimal vai ficar, so que vira string
console.log(numero.toFixed(2))
console.log(typeof numero.toFixed(2))

//toPrecision _ retorna o numero de digitos que vc quer de um numero
console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(3))

console.log((12).toPrecision(6))


//toExponential _ retorna uma notação exponencial de base 10
let numero2 = 12.34567
console.log(numero2.toExponential())
console.log(numero2.toExponential(4))