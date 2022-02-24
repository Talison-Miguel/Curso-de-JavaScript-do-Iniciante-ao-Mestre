const arr = [1, 5, 10, "Ola", true]

let soNumeros = arr.some(function (el) {
    return typeof el === "number"
})

let arr1 = arr.filter(function (el, i, _arr) {
    return typeof el === "number"
})

const arra2 = {}
arr.forEach(function (el, i, _arr) {
    console.log(i, ': ', el)
})

let arr2 = arr1.map(function (el, i, _arr){
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)



//Verifica      _ os Elementos de um array
//arr.every     _ retorna true se todos os items forem true dentro da array
//arr.some      _ retorna true se tem pelo menos um item true dentro da array

//arr.filter    _ retorna uma nova array filtrada

//arr.forEach() _ um for pra array, passa pelo array todo 

//arra.map()      _ devolve um novo Array como resultado