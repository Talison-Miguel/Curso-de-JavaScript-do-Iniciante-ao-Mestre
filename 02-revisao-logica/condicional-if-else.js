let idade = 17;
let paisPresents = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresents) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`)


if(!comprouBilhete){
    console.log("Nao comprou bilhete")
} else{
    if(idade >= 18){
        console.log("É maior de idade, pode viajar")
    } else{
        console.log("Opa, é menor de idade")
    }
}

let n1 = 6
let n2 = 0
let media = (n1 + n2) / 2
console.log(`media: ${media}`)

if(n1 === 0 || n2 === 0){
    console.log("Reprovado")
} else if(media < 7){
    console.log("Reprovado, mas há como reculperar")
} else{
    console.log("Aprovado")
}

console.log("saiu do bloco if")