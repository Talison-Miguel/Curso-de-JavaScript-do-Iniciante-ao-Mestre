import axios from "axios"
import { ResponseUserProps } from "./index"

async function Fn(): Promise<string> {
    return '_____________teste__________________'
}

const fn  = Fn()
fn.then(n => console.log(`Valor de: ${n}`))


async function getUser(id: number): Promise<ResponseUserProps> {
    try {
        const response = await axios.get<ResponseUserProps>(`http://localhost:3001/users/${id}`)
        return response.data
    } catch (e) {
        throw new Error("Error Message: " + e)
    }
}

getUser(8)
    .then( response => console.log(response))
    .catch(e => console.log('Deu ruim ___ ' + e.message))