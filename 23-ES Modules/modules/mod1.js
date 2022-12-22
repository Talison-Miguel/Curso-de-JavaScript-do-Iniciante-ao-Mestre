import { MyMod2 } from "./mod2.js"

function myMod1() {
    console.log('myMod 1 execultado')

    return "Valor retornado de myMod1"
}

export function myMod1_nomeada() {
    return('funçao exportada nomeada')
}

export const PI = "Pi: " + Math.PI

export const obj = {
    foo: true,
    bar: 'false'
}

const nome = 'Daniel'
const idade = 40

export {nome, idade}

console.log(new MyMod2( ))

//usa o default para se importar com qualquer nome
export default myMod1