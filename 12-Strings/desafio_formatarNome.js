function formatarNome(nomeCompleto) {
    //remover os espaços antes e depois
    nomeCompleto = nomeCompleto.trim()

    let espacoPosicao = nomeCompleto.indexOf(' ')
    if(espacoPosicao > -1) {
        let primeiroNome = nomeCompleto.slice(0, espacoPosicao)

        let restoDoNome = nomeCompleto.slice(espacoPosicao + 1)

        return `${restoDoNome}, ${primeiroNome}`
    }

 return nomeCompleto
}

console.log(formatarNome('Talison')) // Talison
console.log(formatarNome('Talison Miguel')) // Miguel,Talison
console.log(formatarNome('Talison Miguel Amancio')) // Miguel Amancio, Talison
console.log(formatarNome('Talison Miguel Amancio')) // Miguel Amancio, Talison

