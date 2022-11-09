const teste = (function(num){
    // n = 10

    //esse conceito lembra das variáveis que foram definidas ao redor da funçao
    return function testeInterno() {
        console.log('teste interno chamado', ++num)
        return 'retorno de teste interno ' + num
    }
})(10)

let str = teste()
teste()
teste()
let str2 = teste()
console.log(str)
console.log(str2)