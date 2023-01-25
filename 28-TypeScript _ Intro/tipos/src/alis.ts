function add3(x: number, y?: number) {
    if(y === undefined) return null

    return x + y
}

const test = add3(10)

let test2: number | string 

test2 = 10
test2 = 'test2'



type testeAlias = number | string | boolean

let test3: testeAlias
teste3 = 10 


type User = {nome: string, idade?: number | null}

const daniel: User = {
    nome: 'talis',
    idade: 10
} 

const maria: User = {
    nome: "maria",
    idade: 30
}

type Sizess = '12px' | '16px' | '24px'
const small: Sizess = "12px"
const normal: Sizess = "16px"