console.log("__________Desafiio__________")

const numeros = [1, 3, 4, 1, 5, 3, 5 ,8 ,9]
//const numerosUnicos = [1, 3, 4, 5, 8 ,9] retorno
// (acumulador, atual, i, _arr)

let arrayNumerosUnicos = numeros.reduce( function (numerosUnicos, numeroAtual) {

    //se numerosUnico no indice do numeroAtual for menor que 0, significa que ele nao encontrou
    if (numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual)        
    }

    return numerosUnicos
}, [])
console.log(typeof arrayNumerosUnicos)

console.log(arrayNumerosUnicos)



//arr.reduce()  _ retorna a soma dos numeros do array , por dois parametros o acumulador e o atual, inicio/fim