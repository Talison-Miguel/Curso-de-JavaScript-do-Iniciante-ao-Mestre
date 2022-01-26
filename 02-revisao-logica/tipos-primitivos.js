// strings, number (int, dec), boolean
// undefined, null, symbol

let minhaVar  = 'minha string';
let minhaVar2 = '"minha \"string"\ com aspas duplas"'

let idade = 40;
// let msg = 'Eu possuo ' + idade+ ' anos';
let msg = `Eu possuo ${idade} idade anos`;

console.log(msg);
console.log('Hello' + ' Word');
console.log(typeof(msg), typeof(idade));

const n1 = 10;
const n2 = 1.1;
console.log(typeof(n1), typeof(n2))

const isValide = false
console.log(isValide)

let varTeste = null
console.log(varTeste)
varTeste = 10
console.log(varTeste)