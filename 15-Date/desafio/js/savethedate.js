(function () {
    const dateEventDom = document.querySelector('.hero-content h1 span').innerText
    console.log(dateEventDom)
    const dateEvent = getDate(dateEventDom)
    console.log(dateEvent)


    const today = new Date()
    //pega a data do futuro menos o dia de hoje
    let left  = dateEvent.getTime() - today.getTime()

    const one_minute = 60 * 1000
    const one_hour   = 60 * one_minute
    const one_day    = 24 * one_hour

    const daysLeft   = parseInt(left / one_day)
    left = left - daysLeft * one_day

    const hourLeft = parseInt(left / one_hour)
    left = left - hourLeft * one_hour

    const minutesLeft = parseInt(left / one_minute)
    left = left - minutesLeft * one_minute

    const secondsLeft = parseInt(left / 1000)


    addLeftTime(daysLeft, hourLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s) {
        const p = document.createElement("p")
        p.textContent = `Contagem Regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
        document.querySelector(".hero-content").appendChild(p)
    }

    function getDate(string) {
        //o split() divide uma String em uma lista ordenada de substrings
        const [date, hour] = string.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")

        return new Date(year, month - 1, day, h, m)
    }

})()