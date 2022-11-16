//--METODOS ESTATICOS--


//ES5
function Animal(){}

Animal.prototype.quemSouEu = function() {
    return this
}

Animal.categoria = 'ser vivo'
const dog = new Animal()



//ES6
class Cachorro {
    constructor(nome) {
        this.nome = nome
        console.log('chamando metodo estatico dentro do constructor')
        Cachorro.beber()
    }

    static comer() {
        // console.log(this) //Cachorro
        console.log('comendo')
        this.beber()
    }

    static beber() {
        console.log('bebendo')
    }
}

const dog2 = new Cachorro('rex')