function add(x: number, y: number) {
    return x + y
}


const multiply = (x: number, y: number) => {
    return x * y
}


const subtract: (x: number, y:number) => number = (x, y) => x - y
let teste = subtract(3, 2)   





type LevelAdm = "teacher" | 'coordenator' | 'manager'

type User = {
    name: string
    id: number
}

type Adm = {
    isAdmin: true,
    level: LevelAdm
}

type UserAdm = User & Adm

let daniele: UserAdm = {
    name: 'Daniele',
    id: 0,
    isAdmin: true,
    level: "teacher"
}

type IsAdmin = (user: User) => boolean

const isAdmin: IsAdmin = (user) => !!(user as UserAdm).isAdmin 

console.log(isAdmin(daniele)) // true

let maria: User = {
    name: 'maria',
    id: 1
}

console.log(isAdmin(maria)) // false

export default 2