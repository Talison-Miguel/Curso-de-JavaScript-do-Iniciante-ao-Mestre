function alteraArray(a){
    a.push("Adicionado")
}

let arr = ["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)



function alteraPrimitivo(p){ // "mensagem"
    p += " Adicionado"
    console.log(`Dentro da funçao ${p}`)
}

let msg = "mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
