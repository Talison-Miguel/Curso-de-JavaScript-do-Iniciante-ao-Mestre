// criar um array com numeros randomicos nao repetidos

function generateRamdonInteger (max) {
    return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while(arr.length <= 20) {
    let ramdomNumber = generateRamdonInteger(30)

    if (arr.indexOf(ramdomNumber) < 0) {
        arr.push(ramdomNumber)
    } else {
        console.log(ramdomNumber, 'ja existe no array')
    }
    i++
}
console.log(arr)
console.log(`O loop foi execultado ${i} vezes`)