let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))
console.log(arr.indexOf(555) > -1)

console.log(arr.includes(55))

console.log(arr.find(function (el) {
    return el > 10
}))

console.log(arr.findIndex(function (el) {
    return el > 10
}))





//indexOf()  _ retorna o primeiro indice do valor colocado nos parenteses
//indexOf()  _ retorna o ultimo indice do valor colocado nos parenteses
//includes() _ retorna true ou false , se encontrou ou nao
//find()     _ retorna o primeiro valor encontrado que satisfaça uma condiçao
//findIndex()_ retorna o indici di primeiro elemento cujo valor passar na condiçao especificada
