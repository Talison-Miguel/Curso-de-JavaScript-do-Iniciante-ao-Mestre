// Array.indexOf(elementoDePesquisa, [pontoInicial = 0])

//Filtro de lista na tela
//qualquer logica pra comparar strings ou buscar no array


//procurar inteiro em um array
let numeros = [5, 10, 15]
console.log(numeros.indexOf(15))

//procurar string dentro de um array de strings
let frutas = ['pera', 'laranja', 'maça']
console.log(frutas.indexOf('laranja'))

//procurando uma string dentro de outra
let texto = 'Um text para teste'
console.log(texto.indexOf('para'))

//ultilizando um segundo parametro
// let texto2 = 'Um text para teste, vamo ver se o teste da certo'
// console.log(texto2.indexOf('teste', 15))


let filtro = 've'
let cores = ['vermelgo', 'verde', 'azul', 'amarelo']
let coresFiltradas = cores.filter( (cor) =>{
    // a cor que nao tem o valor da variavel filtro vai ficar menos -1, entao ela sai, ai so retorna as cores passadas pelo filtro
    if (cor.indexOf(filtro) !== -1) {
        return cor
    }
})
console.log(coresFiltradas)