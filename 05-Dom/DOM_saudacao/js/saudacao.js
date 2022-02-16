(function(){
    const nameUser = null
    const usuario = document.querySelector(".top-bar p")
    if(nameUser){
        console.log(usuario.textContent)
        // usuario.innerHTML = `${usuario.innerHTML}  ${nameUser}` 
        usuario.innerHTML += `<b> ${nameUser} </b>`
    } else {
        // usuario.parentElement.style.display = "none"
        // usuario.parentElement.remove()
        const elementoParaRemover = usuario.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }

    console.log(usuario)
})()

//parentElement _ mostra os parentes de tal classe
//children      _ mostra os filhos de tal classe
//remove()      _ remove os elementos ... mais novo
//removeChild() _ remove o filho do de tal classe ... funciona em todas verçoes