type CallBackProps= (data?: OutputProps) => void

export interface OutputProps  {
    data?: any,
    type: string
}

type SubscribersProps =  {
    [Prop in string]: CallBackProps[]
}

export class PubSub {
    static subscribers: SubscribersProps = {}

    static subscriber(eventName: string, callback: CallBackProps) {
        PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || []
        PubSub.subscribers[eventName].push(callback)

        PubSub.subscribers.teste = []
    }

    static unsubscriber(eventName: string, callback: CallBackProps) {
        if(PubSub.subscribers[eventName]) {
            const index = PubSub.subscribers[eventName].findIndex((element: Function) => element === callback)
            if(index > -1) {
                PubSub.subscribers[eventName].splice(index, 1)

                if(PubSub.subscribers[eventName].length === 0) {
                    delete PubSub.subscribers[eventName]
                }
            }
        }
    }

    static publish(eventName: string, data: any) {
        if(PubSub.subscribers[eventName]) {
            PubSub.subscribers[eventName].forEach( (fn: CallBackProps) => {
                const output: OutputProps = {data, type: eventName}
                fn(output)
            });
        }
    }
}




