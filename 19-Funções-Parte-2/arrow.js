console.log(teste())

function teste(str) {
    return 'function expression - ' + str
}

console.log(testeArrow())
const testeArrow = (str, m) => 'arrow function - ' + str + ' ' + m

//segunda maneira de retornar, sem o return
const testeArrow2 = () => ({
    foo: 'bar'
})

const t1 = testeArrow('parametro Arrow', 9)
console.log(t1)

const t2 = testeArrow2()
console.log(t2)
console.log(t2.foo)
console.log(t2['foo'])