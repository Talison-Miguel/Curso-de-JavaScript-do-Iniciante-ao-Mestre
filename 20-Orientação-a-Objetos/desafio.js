function ReplaceAllCaracteres(texto) {
    this.texto = texto.split('')

}

//Adicionando funçao no prototype so uma vez
ReplaceAllCaracteres.prototype.replaceString = function(stringParaSubstituir, substituicao) {

    const letraReplace = substituicao
    const array = this.texto
    // console.log(this.texto)
    let string = []
    array.map((letra) => {
        if(letra !== stringParaSubstituir) {
            string.push(letra)
        } else {
            string.push(letraReplace)
        }
    })

    let stringInicial = this.texto.join()
    let stringFinal = string.join()
    console.log( 'String incial =>', stringInicial)
    console.log( 'String Final =>',stringFinal)
}


let string1 = new ReplaceAllCaracteres('talis')
string1.replaceString('a', '4')

console.log('___________________________')

let string2 = new ReplaceAllCaracteres('texto')
string2.replaceString('t','*')