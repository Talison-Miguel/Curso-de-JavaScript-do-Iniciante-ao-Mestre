(function(){
    const nameUser = "Daniel"
    
    if (nameUser) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <b> ${nameUser} <b/></p>`
        // elementPai.insertBefore(novoElement, elementReference)
      
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
    }
})()

//createElement _ Cria um elemento
//insertBefore _ insere um elemento antes