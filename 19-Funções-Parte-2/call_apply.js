// var name = 'talison'
// const name2 = 'miguel'

function teste(str, num) {
    console.log(this)
    console.log(this.name)
    // console.log(this.name2)
    console.log(str, num)
}

//call() _ muda o this, pelos agumentos '()'
//apply _ tambem
teste.call({name: 'amancio'}, 'string', 20)
console.log('------------')
teste.apply({name: 'joao'}, ['da silva', 28])
console.log('------------')
//usou o spred operator para quebrar o array '...'
teste.call({name: 'italo'}, ...['henrique', 28])

console.log('------------')

//bind() _ altera o this quando define a funçao, e retorna uma nova funçao
const teste2 = teste.bind({name: 'joana'})
teste2('joaquina', 30)

document.addEventListener('click', teste2)