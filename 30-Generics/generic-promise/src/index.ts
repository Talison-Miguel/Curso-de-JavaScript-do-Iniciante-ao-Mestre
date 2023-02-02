import axios, { AxiosResponse } from 'axios'

export interface ResponseUserProps { 
    name: string, 
    id: number, 
    email: string 
}

axios.get<Array<ResponseUserProps>>("http://localhost:3001/users").then((response) => {
    console.log("---- response.data ----")
    const resposta = response.data[0]
    console.log(resposta)
})


const miguel: ResponseUserProps = { 
    name: "Jone", 
    id: 4, 
    email: "miguel@gmail.com" 
}

axios.post<ResponseUserProps>("http://localhost:3001/users", {name: 'tete', email: "Jone@gmail.com" }).then( (response) => {
    console.log(response.data.id)
})

const getUser = async (id: number): Promise<AxiosResponse<ResponseUserProps>> => {
    return await axios.get(`http://localhost:3001/users/${id}`)
}

console.log('getUser')
getUser(2).then(({data}) => console.log(data))