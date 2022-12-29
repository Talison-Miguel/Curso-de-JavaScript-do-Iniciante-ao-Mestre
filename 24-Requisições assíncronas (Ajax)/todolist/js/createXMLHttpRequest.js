export function createXMLHttpRequest(method, url, funcaoCallback, data = null ) {
    //esse funcaoCallback é a propia função mostrarUsuarios()

    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    //Sempre que for enviar dados, tem que ser em JSON como string
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {   
        if(xhr.readyState === 4) {
            if(xhr.status < 400) {
                const json = JSON.parse(xhr.responseText)

                if(typeof funcaoCallback === "function") {
                    funcaoCallback(json)
                }
            } else if(typeof funcaoCallback === "function") {
                funcaoCallback({
                    error: true,
                    status: xhr.status,
                    message: 'Algo deu errado com a conexão'
                })
            }
        }
    }
}