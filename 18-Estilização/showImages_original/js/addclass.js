//Criou um elemento array com todos que tem esse atributo, ew desestrututorou ele com o [...]
let elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]

window.addEventListener('scroll', addClassOnScroll)

function isElementIntroView(element) {
    let elementRect = element.getBoundingClientRect()
    return (
        (elementRect.top <= 0 && elementRect.bottom >= 0) || 
        (elementRect.top >= 0 && elementRect.bottom <= innerHeight)
    )
}

function addClassOnScroll() {
    //se ja tiver scrolado tudo, vai remover a funçao pra nao ficar execultando
    if(elements.length === 0) {
        window.removeEventListener('scroll', addClassOnScroll)
        console.log('evento removido com sucesso')
    }


    elements.forEach(el => {
        //A funçao vai retornar true, se for true faça tal coisa
        if(isElementIntroView(el)) {
            let delay = parseInt(el.getAttribute('data-addclass-on-scroll-delay')) || 0

            setTimeout(function() {
                //Adicionei a classe e removi os 2 atributos, e atualizei o array dos elementos

                let _class = el.getAttribute('data-addclass-on-scroll')
                el.classList.add(_class)
                el.removeAttribute('data-addclass-on-scroll')
                el.removeAttribute('data-addclass-on-scroll-delay')

                elements = [...document.querySelectorAll('[data-addclass-on-scroll]')]
            }, delay)
        }
    })
}

addClassOnScroll()