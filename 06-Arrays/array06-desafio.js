let arr = [1, 2, 3, 4]
// console.log(arr.reverse())
// console.log(arr)

let j = 0
let soma = arr.reduce( function (acumulador, atual, i, _arr) {
    // console.log("i: ", i)
    // console.log("j: ", j++)
    // console.log("acumulador: ", acumulador,"atual: ",  atual)
    return acumulador + atual
}, "")
// console.log(soma)
// console.log(arr)



const nomes = ['Daniel', 'Maria', 'Joana', 'Joao']
let nomesPorOrdem = nomes.reduce( function (nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    //verifica se ja existe com aquele letra
    if (nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else{
        nomes[primeiraLetra] = 1
    }   
    //Vai retornar qts nomes tem de tal letra
    return nomes
}, {})
//passa um objeto vazio

// console.log(nomesPorOrdem)



console.log("__________Desafiio__________")

const numeros = [1, 3, 4, 1, 5, 3, 5 ,8 ,9]
//const numerosUnicos = [1, 3, 4, 5, 8 ,9] retorno

// (acumulador, atual, i, _arr)
novoArrayNumerosUnicos = new Set()
let arrayNumerosUnicos = numeros.reduce( function (numerosAculmulados, numeroAtual) {

    novoArrayNumerosUnicos.add(numeroAtual)

    return novoArrayNumerosUnicos
}, [])
console.log([...arrayNumerosUnicos.values()])
//o new Set() so armazena valores unicos
//para converter o objeto retornado pelo set, se coloca [...o array.values()], ai sera retornado so os valores




//arr.reverse() _ inverte a ordem do array
//arr.reduce()  _ retorna a soma dos numeros do array , por dois parametros o acumulador e o atual, inicio/fim