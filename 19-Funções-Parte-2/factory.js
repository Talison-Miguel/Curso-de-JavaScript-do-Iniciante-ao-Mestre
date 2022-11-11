//É uma funçao que cria objetos, para ser reaproveitados 

function criarCachorro(name) {
    posicao = 0

    return {
        name,
        latir(){
            console.log(this.name, 'esta latindo')
        },
        andar(distancia){
            posicao += distancia
            console.log(this.name, 'andou ', distancia, ' m')
        },
        //associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada
        //get ___chama uma propiedade como função
        get posicao() {
            console.log(`${this.name} esta na posição ${posicao}m`)
            return posicao
        }
    }
} 

const rex = criarCachorro('Rex')
rex.andar(10)
rex.andar(5)
rex.pegaPosicao()
console.log(rex)

console.log('-----------')

const toto = criarCachorro('Toto')
toto.andar(20)
toto.andar(-5)
toto.andar(2)
toto.pegaPosicao()
