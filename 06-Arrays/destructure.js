const arr = [10, 20, 30]

// o ... é o rest operator, pega o restante dos valores e armazena numa variavel
//tirar da array uma variavel com o valor que quer
const [n1, ...n2] = arr

console.log(n1)
console.log(n2)