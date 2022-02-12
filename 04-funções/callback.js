//É uma funçao que pássa por parametro outra funçao, e essa funçao so executa qnd a outra execultar


const teste = function (cb){
    console.log("funcao teste")
    console.log(cb)
    typeof cb === "function" && cb(30)
}

const fn = function (param){
    console.log("funcao anonima de callback")
    console.log(param)


}
// fn(30)

teste(fn)