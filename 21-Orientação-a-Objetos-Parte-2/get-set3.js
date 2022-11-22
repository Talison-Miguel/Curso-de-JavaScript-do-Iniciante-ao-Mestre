//DESAFIO
// crie um objeto pessoa.
// Deve ter uma propriedade get chamada usuarios que deve armazenar uma array de strings
// Deve ter uma propriedade get chamada usuario que deve retornar o ultimo usuario da array
// Sempre q alterar o usuario (set), nao deve substituir, mas sim colocar num array, se já não existir na array de usuarios

;(function(){
    let _usuarios = ['talison', 'miguel', 'ultimo']

    const pessoa = {
        
        get usuario() {
            let ultimoUsuario = _usuarios.at(-1)
            return ultimoUsuario
        },
        
        set usuario(valor){
            if(_usuarios.indexOf(valor) === -1) {
                _usuarios.push(valor)
            } else {
                throw new Error('Palavra já existente')
            }
        },

        get usuarios() {
            return [].concat(..._usuarios)
        },
    }

    this.pessoa = pessoa
})()