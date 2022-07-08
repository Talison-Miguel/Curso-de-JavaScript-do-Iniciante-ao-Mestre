let str1 = "Minha String Bacana"



// replace, recoloca no lugar de tal coisa
console.log(str1.replace("i", "o"))
console.log(str1.replace(/i/g, "e"))


//indexOF_ retorna a posição de uma determinda string
//lastIndexOf _ retorna a ultima posiçao
console.log(str1.indexOf("i"))
console.log(str1.lastIndexOf("i"))


//includes _ verifica se existe tal variavel
console.log(str1.includes("minha"))
console.log(str1.indexOf("minha"))


console.log("-------------------------")


//ambos cortam um pedaço da string, (começo, fim)
console.log(str1.slice(2))
console.log(str1.substring(2))


console.log("-------------------------")


//Transforma em maiusculo ou minusculo
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())


console.log("-------------------------")

//valueOf _ retorna o valor primitivo do objeto especificado
let strAsObj = new String("minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf())


console.log("-------------------------")


//trim _ remove os espaços em branco ou quebra de linha no começo e no final da string
str1 = "         " + str1 + "      ",
console.log(str1)
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart())


console.log("-------------------------")


//padStart _ preenche a string original com um determinado caractere
str1 = "0123456789"
console.log(str1.padEnd(20, "."))
console.log(str1.padStart(20, "*"))
console.log(str1.padStart(20, "*").length)
console.log(str1)


console.log("---Desafio---")
let telefone1 = "91234-2345" //"9****-**45"
let telefone2 = "1234-2345" //"1***-**45"

function mascararTelefone(numero) {
    let hifemPosicao = numero.indexOf('-')
    let numInicio = numero.slice(0, hifemPosicao)
    let numFinal = numero.slice(hifemPosicao + 1)

    let doisUltimosNumeros = numFinal.slice(-2)
    return `${numInicio[0].padEnd(numInicio.length, "*")}-${doisUltimosNumeros.padStart(numFinal.length, "*")}` 
}

console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))


console.log("-------------------------")


//startsWith e endsWith _ verifica se começa ou se termina com algo
// segundo parametro é de onde começa
let str2 = "hoje é sabado"
console.log(str2.startsWith("hoje", 0))
console.log(str2.endsWith("sabado"))


console.log("-------------------------")


//charAt _ vai reculperar o valor de tal posiçao
//charCodeAt _ retorna o codigo da tabela de uni code do caractere
let str3 = "abcdefgh"
console.log(str3.charAt(1))
console.log(str3[1])
console.log(str3.charCodeAt(0))
