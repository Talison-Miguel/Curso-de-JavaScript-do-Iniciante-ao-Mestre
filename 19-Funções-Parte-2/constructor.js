function Cachorro(name) {
    let posicao = 0

    this.name = name

    this.latir = function() {
        console.log(this.name, 'esta latindo')
    }

    this.andar = function(distancia) {
        posicao += distancia
        console.log(`${this.name} andou ${distancia}m`)
        console.log(`${this.name} esta na posição ${posicao}m`)
    }
}

//usar o new, se cria um obj limpinho

const rex = new Cachorro('rex')
const toto = new Cachorro('toto')

console.log('----------')
console.log(rex)
rex.latir()
rex.andar(10)
rex.andar(20)

console.log('----------')
toto.andar(2)

console.log('----------')

const laica = new Cachorro('laica')
laica.latir()
laica.andar(8)
laica.andar(2)
laica.andar(-8)

