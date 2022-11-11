//spred operator, separa o array
let array = [1,2,3,4,5]
console.log(...array)

console.log('----------')

//rest opetator, nos permite representar um número indefinido de argumentos como um array.
function teste(n1, n2, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(ns)
    console.log(ns.map)

    console.log(typeof ns)
}

teste(1,2,3,4,5)

console.log('----------')

function teste2(...nums) {
    console.log(nums)
}

teste2(1,2,3,4,5)
