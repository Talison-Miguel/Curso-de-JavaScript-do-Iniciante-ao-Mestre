type Userrr = {
    name: string
    id: number
}

type LevelAdm = "teacher" | 'coordenator' | 'manager'

type Adm = {
    isAdmin: true,
    level: LevelAdm
}

type UserAdm = Userrr & Adm

let daniele: UserAdm = {
    name: 'Daniele',
    id: 0,
    isAdmin: true,
    level: "teacher"
}

export default 1