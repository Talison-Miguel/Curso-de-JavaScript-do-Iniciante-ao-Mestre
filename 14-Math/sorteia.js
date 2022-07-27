//Definir os valores padroes
function getRandomNumber(inicio = 0, fim = 10, integer = true) {
    // () * limite maximo + limite min
    let numeroGerado = Math.random() * (fim - inicio) + inicio

    if(integer === true) {
        numeroGerado = Math.round(numeroGerado)
    }

    return numeroGerado
}

console.log(getRandomNumber(0, 20, false))