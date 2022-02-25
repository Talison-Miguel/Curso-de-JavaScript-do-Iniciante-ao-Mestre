function sum () {
    const numbers = []
    // for(let i = 0; i < arguments.length; i++) {
    //     numbers.push(arguments[i])
    // }    
    // console.log(numbers)

    //pega emprestado o forEach do array pra usar nos argumentos
    Array.prototype.forEach.call(arguments, function (argument){
        numbers.push(argument)
    })

    //usando o reduce para somar
    return numbers.reduce( function(sum, atual){
        return sum + atual
    }, 0)
}
console.log(sum(1, 2, 3, 4, 5))

function avarege(){
    //ta pegando o arguments usando o apply, pq como segundo parametro ele recebe um array
   const soma = sum.apply(null, arguments) 
   console.log(soma)

   return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 5))


//duas outras formas pra chamar uma função
// sum.call(null, 1, 2, 3, 4, 5)
// sum.apply(null, [1, 2, 3, 4, 5])