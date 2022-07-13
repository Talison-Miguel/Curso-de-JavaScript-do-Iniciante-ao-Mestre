function formatarNome(nomeCompleto) {
    
    //split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array
    let nomeArray = nomeCompleto.split(" ")
    if( nomeArray.length === 1) {
        return nomeCompleto
    }

    //shift()remove o primeiro elemento de um array e retorna esse elemento
    let primeiroNome = nomeArray.shift()

    //join() junta todos os elementos de um array
    return nomeArray.join(' ') + ', ' + primeiroNome
}

console.log(formatarNome('Talison')) // ['Talison']
console.log(formatarNome('Talison Miguel')) // ['Talison', 'Miguel']
console.log(formatarNome('Talison Miguel Amancio')) // ['Talison', 'Miguel', 'Amancio']

