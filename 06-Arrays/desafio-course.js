function sum(){
    // const numbers = Array.from(arguments)
    //array.from(arguments) para pegar todos os parametros passados e colocar dentro
    const numbers = [...arguments]
    // ... para receber os argumentos passados
    return numbers.reduce( function(sum, atual){
        return sum + atual
    }, 0)
}

function avarege(){
    return sum(...arguments) / arguments.length
    //arguments é como se fosse um array, o ... quebra eles
}

let soma = sum(1, 2, 3, 4, 5)
let media = avarege(1, 2, 3, 4, 5)
console.log(soma)
console.log(media)
