//Adicionando funçao no prototype so uma vez
String.prototype.replaceString = function(stringParaSubstituir, substituicao) {
    let texto = this.valueOf()

    const letraReplace = substituicao
    const array = texto.split('')
    console.log(array)

    // console.log(this.texto)
    let string = []
    array.map((letra) => {
        if(letra !== stringParaSubstituir) {
            string.push(letra)
        } else {
            string.push(letraReplace)
        }
    })

    let stringInicial = texto
    let stringFinal = string.join()
    console.log( 'String incial =>', stringInicial)
    console.log( 'String Final =>',stringFinal)
}


let string1 = 'talis'
string1.replaceString('a', '4')

console.log('___________________________')

let string2 = 'texto'
string2.replaceString('t','*')
