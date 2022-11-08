const str = 'global string'

function teste(str) {
    console.log('-------- this de teste')
    console.log(this)
    console.log(str)

    setTimeout(() => {
        console.log('--------')
        console.log(this)
    }, 2000)
}

const teste2 = () => {
    console.log('arrow this: ', this )
}

teste2()

const obj = {
    foo: 'bar',
    teste,
    teste2
}

obj.teste()
// obj.teste2()

// teste('parametro')