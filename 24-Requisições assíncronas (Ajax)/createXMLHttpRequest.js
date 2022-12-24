function createXMLHttpRequest(method, url, funcaoCallback, data = null ) {
    //esse funcaoCallback é a propia função mostrarUsuarios()

    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {   
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                const json = JSON.parse(xhr.responseText)

                if(typeof funcaoCallback === "function") {
                    funcaoCallback(json)
                }
            } else if(typeof funcaoCallback === "function") {
                funcaoCallback({
                    status: xhr.status,
                    message: 'Algo deu errado com a conexão'
                })
            }
        }
    }
}