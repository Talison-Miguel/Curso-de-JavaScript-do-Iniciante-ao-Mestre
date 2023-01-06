export function createPromise(method, url, data = null ) {

    //Promisse é uma funçao que pode retornar os dados ou um erro
    //A função createPromise retorna uma promisse, resolve se nao tiver erro, e reject se tiver
    const promise = new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        //Sempre que for enviar dados, tem que ser em JSON como string
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(data)
    
        xhr.onreadystatechange = verificaAjax
    
        function verificaAjax() {   
            if(xhr.readyState === 4) {
                if(xhr.status < 400) {
                    const dadosJson = JSON.parse(xhr.responseText)
                    resolve(dadosJson)
                } else {
                    reject(Error('Algo deu errado com a conexão'))
                }
            }
        }
    })

    return promise
}