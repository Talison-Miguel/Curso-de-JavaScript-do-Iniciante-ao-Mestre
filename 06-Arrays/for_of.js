const arr = [1, 2, 3, 4]
const obj = {
    nome: "maria",
    idade: "28",
    email: "maria@gmail.com"
}

//for in serve pra percorer objetos
for(let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}

// for off serve pra percorer o array
for(n of arr){
    console.log(n)
}