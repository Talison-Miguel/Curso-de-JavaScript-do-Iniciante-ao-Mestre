import { PubSub } from "./PubSub"

const testeEvent1 = document.querySelector('#testEvent') as HTMLElement
const testeEvent2 = document.querySelector('#testEvent2') as HTMLElement
const testeEvent3 = document.querySelector('#testEvent3') as HTMLElement

type EventFire = ( this: HTMLElement | Document, event: MouseEvent) => void

const eventFire: EventFire = function (event: MouseEvent) {
    // console.log(event)
    // console.log(this)

    const currentTarget = event.currentTarget as HTMLElement
    const quantity = this.querySelector('span') as HTMLSpanElement
    const n = parseInt(quantity.textContent!) 
    quantity.textContent = (n + 1).toString()

    if(this !== testeEvent2 && this !== document) {
        const event2 = new Event('customclick')
        testeEvent2.dispatchEvent(event2)

        const event3 = new CustomEvent('customClick', {detail: n + 1})
        testeEvent3.dispatchEvent(event3)
    }


}

testeEvent1.addEventListener('click', eventFire)
testeEvent2.addEventListener('customclick', eventFire as EventListener) 
testeEvent2.addEventListener('click', function(e) {
    // console.log(e)
}) 
testeEvent3.addEventListener('customClick', function(e) {
    console.log(e)
})

document.addEventListener('click', eventFire)


/* ______________________ */
/* PubSub Designer Patter */
const pubsub = document.getElementById('pubsub')

function teste(data) {
    console.log('teste', data)
}

PubSub.subscriber("EventTest", teste)

PubSub.subscriber("EventTest2", teste)
PubSub.subscriber("EventTest3", teste)

PubSub.unsubscriber("EventTest2", teste)

console.log(PubSub.subscribers)
console.log(PubSub.subscribers)

PubSub.publish('EventTest', 20)
PubSub.publish('EventTest', 'valor do data 2')

