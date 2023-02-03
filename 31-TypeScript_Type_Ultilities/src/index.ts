type Square = {
    x: number,
    y: number,
    width: number,
    higth: number,
}


const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    higth: 200
}

type UpdateSquare = (a: Square, d: Partial<Square>) => Square
const square2: Partial<Square> = {x: 30}

const updateSquare: UpdateSquare = (a, b) => {
    
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square, {x: 70})
console.log(square)
// console.log(square2)
console.log(square3, '__')


console.log('------------------------')

interface User {
    readonly name: string,
    email: string,
    id?: number
}

type UserGet = Required<User>

type UserPatch = Partial<User>
const maria : UserPatch = {id: 2}


type UserRead = Readonly<User>
const daniel: User = {
    name: 'daniel',
    email: 'danie.@server'
}

daniel.id = 4

console.log(daniel)


console.log('------------------------')


