// '+ - * / % **'
let n1 = 10;
let n2 = 5;

// Operadores Aritmeticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);


// Operadores de atribuiçao
let n3 = 20;
// n3 = n3 + 15 ;
n3 += 2;
console.log(n3);


// Incremento e Decremento
let i = 0
console.log(i--);
i++;
i++;
i++;
console.log(i)


// Comparaçao
/*
    Igualdade de valor ==
    ogualdade e tipo ===
    <, >, <=, >=
    != Valores diferentes
    !== valores e tipos diferentes
*/ 


console.log(n1 != '10')
console.log(n1 !== "10")

// Operadores Logicos
/*
Para uma pessoa viajar para o exterior
- precisa ser maior de 18 anos
OU 
Acompanhado com os pais
E
ter comprado o bilhete
*/ 

let idade = 21;
let paisPresents = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresents) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`)

console.log(n1, n2, n3);
n1 = 6
n2 = 8
let media = (n1 + n2) / 2
console.log(`media: ${media}`)
console.log((3 * 2) ** 2)

