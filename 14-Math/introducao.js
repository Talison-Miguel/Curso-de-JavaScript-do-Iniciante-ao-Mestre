//Math.min() _ retorna o menor numero 
console.log(Math.min(1,2,3,4,5))

//Math.max() _ retorna o maior numero 
console.log(Math.max(1,2,3,4,5))

let arr = [1,2,3,4,10]
console.log(Math.max(...arr))


console.log("________________")

//Math.round() _ retorna o numero arredondado
console.log(Math.round(45.4))

//Math.floor() _ retorna o numero arredondado pra baixo
console.log(Math.floor(45.6))

//Math.ceil() _ retorna o numero arredondado pra cima
console.log(Math.ceil(45.4))



console.log("________________")

//Math.pow() _ retorna a potencia de tal numero, (numeri, vezes que é multiplicada por ele mesmo)
console.log(Math.pow(2, 3))



console.log("________________")

//Math.sqrt() _ retorna a raiz quadrada do numero
console.log(Math.sqrt(49))

//Math.cbrt() _ retorna a raiz cubica do numero
console.log(Math.cbrt(8))



console.log("________________")
console.log("Math.random")

//Math.random() _ retorna um numero random entre 0 e 1 se multiplicar pode aumentar tantas vezes
console.log(Math.random(10))
console.log(Math.random(10) * 2)
console.log(Math.random(10) * 10)
console.log(Math.random(10) * 20)


//numero entre 0 e quase 10, arredondado pra baixo
console.log(Math.floor(Math.random(10) * 10))


