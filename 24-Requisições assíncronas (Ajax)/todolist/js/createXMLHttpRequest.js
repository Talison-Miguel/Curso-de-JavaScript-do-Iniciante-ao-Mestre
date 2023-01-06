export function createXMLHttpRequest(method, url, sucess, error, data = null ) {
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

                if(typeof sucess === "function") {
                    sucess(dadosJson)
                }
            } else if(typeof error === "function") {
                error('Algo deu errado com a conexão')
            }
        }
    }
}