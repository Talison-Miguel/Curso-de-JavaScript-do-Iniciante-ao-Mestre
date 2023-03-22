const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]


function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0
}

function getNewPosition(c) {
    const v = parseFloat(c.getAttribute("data-p-velocity")) || .5

    return c.getBoundingClientRect().top * v * -1
}

function positionImage() {
    dataParalaxContainer.forEach(container => {
        let originalPositionY = getComputedStyle(container).backgroundPositionY
        let originalPositionX = getComputedStyle(container).backgroundPositionX

        // console.log(originalPositionY)   
        // console.log(originalPositionX)

        if(isGettingOut(container)) {
            container.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(container)}px `
        }else {
            container.style.backgroundPosition = ` ${originalPositionX} 0px `
        }
    })
}

window.addEventListener('scroll', positionImage)

positionImage()