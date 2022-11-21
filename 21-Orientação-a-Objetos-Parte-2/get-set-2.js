// Exercicio
// crie um objeto produto.
// Esse produto tem uma unica propriedade chamada quantidade
// Proteja essa propriedade para que receba apenas numeros maiores que 0
// toda vez que o valor de quantidade for consultado, mostre no console um contador
// Evite variaveis no escopo global

//IIFE
;(function(){
    let _quantidade = 0
    let _contador = 0
    const produto = {
        get quantidade() {
            _contador += 1
            console.log(`Quantidade consultada ${_contador} vez${_contador > 1 ? `es`: ''}`)
            return _quantidade
        },
        set quantidade(valor) {
            if(valor <= 0) {
                throw new Error('Insira uma quantidade maior que 0')
            }
            _quantidade += valor
        }
    }
    this.produto = produto
})()

produto.quantidade = 20
console.log(produto.quantidade)
produto.quantidade = 30
console.log(produto.quantidade)