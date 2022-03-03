let arr = [4, 5, 10, 20, 35, 4 ,5]

//indexOf() retorna o indice que foi encontrado tal elemento no seu array
console.log('-- indexOf() --')
console.log(arr.indexOf(5))


console.log('________________')
console.log('--- reduce() ---')
// o reduce vai retornar um unico valor
// let soma = arr.reduce( function(acumulador, atual, indice, array)
let array = [1 ,2 ,3, 4, 9, 1, 2, 3]
console.log(array)

let soma = array.reduce( function(acumulador, atual){
    return acumulador + atual
})
console.log(soma)