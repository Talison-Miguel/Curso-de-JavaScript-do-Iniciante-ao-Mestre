function calcImc(peso, altura, classImc) {
    let imc = peso / (altura ** 2)
    console.log(imc.toFixed(2))
    classImc(imc)
}

function classificarImc(imc) {

    if(imc < 16.9){
        console.log("Muito abaixo do peso")
    } else if(imc <= 18.4){
        console.log("Abaixo do peso")
    } else if(imc <= 24.9){
        console.log("Peso normal")
    } else if(imc <= 29.9){
        console.log("Acima do peso")
    } else if(imc <= 34.9){
        console.log("Obesidade Grau I")
    } else if(imc <= 40){
        console.log("Obesidade Grau II")
    } else if(imc > 40){
        console.log("Obesidade Grau III")
    }

}

calcImc(55, 1.64, classificarImc)