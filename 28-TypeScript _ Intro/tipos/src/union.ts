function add2(x: number, y?: number) {
    if(y === undefined) return null

    return x + y
}

const teste2 = add2(10)

let teste3: number | string 

teste3 = 10
teste3 = 'teste3'

const userr: {nome: string, idade?: number | null} = {
    nome: 'talis',
    idade: 10
} 