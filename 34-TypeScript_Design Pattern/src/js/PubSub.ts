export class PubSub {
    static subscribers = {}

    static subscriber(eventName: string, callback: Function) {
        PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || []
        PubSub.subscribers[eventName].push(callback)
    }

    static unsubscriber(eventName: string, callback: Function) {
        if(PubSub.subscribers[eventName]) {
            const index = PubSub.subscribers[eventName].findIndex((element: Function) => element === callback)
            if(index > -1) {
                PubSub.subscribers[eventName].splice(index, 1)
            }
        }
    }

    static publish(eventName: string, data: any) {
        if(PubSub.subscribers[eventName]) {
            PubSub.subscribers[eventName].forEach( (fn: Function) => {
                fn(data)
            });
        }
    }
}




