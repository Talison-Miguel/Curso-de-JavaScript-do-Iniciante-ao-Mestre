const arr = [1, 2, 3]
const arr2 = [4, 5 ,6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)

}


sum(1, 2, 3) // arguments.length = 3
sum(arr) // arguments.length = 1
sum([1, 2, 3])

sum(...[1, 2, 3])
sum(...arr)


arr.push(...arr2)
console.log(arr)



//spread -> ... quebra um array e usa em elementos separados, juntos 
//permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.