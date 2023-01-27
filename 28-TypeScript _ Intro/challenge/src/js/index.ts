//pra ser polegada so dividir o valor por 2.54
//multiplicar por 2.54
const inches = document.querySelector('#inches') as HTMLInputElement
const centim = document.querySelector('#centimeter') as HTMLInputElement


type FnListener = (this: HTMLInputElement, e: Event) => void
const convertToCm : FnListener = function(e) {
    centim.value = String(calculateCM(parseFloat(this.value)))
}

const convertToPol: FnListener = function(e) {
    inches.value = String(calculatetoPol(parseFloat(this.value)))
}

inches.addEventListener('input', convertToCm)
centim.addEventListener('input', convertToPol)

function calculateCM(inche: number) {
    return inche * 2.54
}

function calculatetoPol(cm: number) {
    return cm * 0.393701 
}