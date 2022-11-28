// Symbol chave unica
//Symbolé um objeto interno cujo construtor retorna um symbol primitivo — 
//também chamado de valor Symbol ou apenas Symbol — que é garantido como único
const nome = Symbol()
console.log(typeof nome)


let n = 0
const user = {
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    [nome]: 'com sybol',
    'nome': 'com string',
    3: 'com numero'
}
user.nome = 'nome alterado'
console.log(user)
console.log(user[nome])
console.log('-----------')

let teste = Object.getOwnPropertySymbols(user)
console.log(teste[0])
console.log(user[teste[0]])
console.log(typeof user[teste[0]])
user[teste[0]] = 'symbol alterado'
console.log(user)
