let arr = [1, 3 , 5 , 7, 9]

let teste = arr.push(11, 13, true, "String")

console.log(arr)
console.log(teste)

let ultimoItem = arr.pop()
// let ultimoItem = arr[arr.length - 1]
console.log(ultimoItem)
console.log(arr)

let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

teste = arr.unshift(4, 5, 6)
console.log(teste)
console.log(arr)


let arr2 = arr.slice(2, 4)
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2, 4, "item adicionado a partir do")
console.log(arr3)
console.log(arr)

//arr.push()   _ adiciona valores no fim da array
//arr.pop()    _ retira o ultimo valor da array
//arr.shift()  _ remove o primeiro valor da array
//arr.unshift() _ adiciona um elemento no começo da array
//arr.slice()   _ recorta a array a partir do primeiro parametro ate o ultimo
//arr.splice()  _ retorna os elementos removidos, a partir do primeiro , ate o tanto que colocar no segundo parametro, e adiciona no terceiro parametro a partir do primeiro