//A sintaxe de (get) associa uma propriedade de um objeto a uma função 
//que será chamada quando tal propriedade é acessada.

//A sintaxe (set) liga a propriedade da função para ser chamada 
//quando existe uma tentativa de definir valor para essa propriedade.

//PODE SER USADO PARA PROTEGER UMA VARIAVEL 

let tipo = ''
// const tiposPermitidos = {'mamifero': true,'anfibio': true,'reptil': true}
const tiposPermitidos = ['mamifero', 'anfibio']
const cachorro = {
    name: 'rex',
    //se usar get, o metodo vai virar propíedade pra quem usa, mais aqui é uma funçao
    //get _ vai retornar essa propiedade
    get tipo() {
        return tipo
    },

    //set _ vai setar o novo valor
    set tipo(_tipo) {
        // if(tiposPermitidos[_tipo]) { padrao obj
        if(tiposPermitidos.indexOf(_tipo) >= 0) {
            tipo = _tipo
        }
    }
}





// IIFE Para evitar sujar escopo global
; (function(){
    //A sintaxe de (get) associa uma propriedade de um objeto a uma função 
    //que será chamada quando tal propriedade é acessada.

    //A sintaxe (set) liga a propriedade da função para ser chamada 
    //quando existe uma tentativa de definir valor para essa propriedade.

    //PODE SER USADO PARA PROTEGER UMA VARIAVEL 

    let tipo = ''
    // const tiposPermitidos = {'mamifero': true,'anfibio': true,'reptil': true}
    const tiposPermitidos = ['mamifero', 'anfibio']
    const gato = {
        name: 'pretim',
        //se usar get, o metodo vai virar propíedade pra quem usa, mais aqui é uma funçao
        //get _ vai retornar essa propiedade
        get tipo() {
            return tipo
        },

        //set _ vai setar o novo valor
        set tipo(_tipo) {
            // if(tiposPermitidos[_tipo]) { padrao obj
            if(tiposPermitidos.indexOf(_tipo) >= 0) {
                tipo = _tipo
            }
        }
    }
    this.gato = gato
})()