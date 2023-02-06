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

//Pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

//Omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    higth: 280
}

//Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"
type SaturatedColor = Exclude<SquareColor, "black" | "white">


//Extract<T, U>
type SadColor = "black" | "white" | "grey" | "blue"
type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>
console.log('Pick, Omit, Exclude, Extract')


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

//NonNullable
type Cpf = {cpf: string}
type Cnpj = {cnpj: string}
type User2 = Cpf | Cnpj | null | undefined

const user2: NonNullable<User2> = {
    cpf: "11.1212.3233"
}

//Record<T, U>
type Url = {
    url: string
}
type MidiasSociais = "facebook" | "instagram" | "youtube" | "kawai"
const midias: Record<MidiasSociais, Url> = {
    facebook: {url: 'facebook.com'},
    instagram: {url: 'instagram.com'},
    youtube: {url: 'youtube.com'},
    kawai: {url: 'kawai.com'}
}

console.log(midias)


console.log('--------------Conditional types-------------')
//Conditional types
type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number){

}

myFunction<number>(2)

function myFunction2<T>(param: T) {
    return  function(param2: T extends number ? number : MyString) {

    }
}

const minhaFuncao2 = myFunction2(100)
minhaFuncao2(26)

type NumberOrNever<T> = T extends number ? number : never
// const teste: NumberOrNever<boolean> = null 



//keyof
// type OnePropertyOfSquare = "x","u","width","heigth"
type OnePropertyOfSquare = keyof Square
let onePropertyOfSquare: OnePropertyOfSquare = "x"




//Mapped Types
type Props = "x" | "y" | "z"
// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number
// }

type MappedFromProps<Type extends string | number | symbol> = {
    [P in Type]: P
}

type MyMappedTypes = MappedFromProps<Props>

type MappedFromProps2<Type> = {
    readonly [P in keyof Type]: Type[P]
} 
type Teste = MappedFromProps2<{a: "b", b: "b"}>




//Lookup Types prop[type]
type BankAcount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}

type Id = BankAcount["id"]
type Count = BankAcount["count"]
type Digit = BankAcount["count"]["digit"]


//typeof
const myCount: BankAcount = {
    id: 1,
    name: "talison",
    count: {
        agency: 123,
        code: 54,
        digit: 23
    }
}

type TypeOfMyCount = typeof myCount
type TypeOfMyCountId = typeof myCount.id

let minhaString = "ola mundo"
let string2: typeof minhaString