interface ActionProps<Tipo = string> {
    action: Tipo  
}

const step1: ActionProps<number> = {
    action: 1
}

step1.action = 99

const step2: ActionProps<boolean> = {
    action: true
}
step2.action = false

type Action<Tipo> = {
    actionT: Tipo
}
const step3: Action<string> = {
    actionT: 'Type'
}

const step4: ActionProps = {
    action: 'string'
}

console.log(step1, step2, step3, step4)

console.log('_____________________________')

type NumberOrString2 = number | string
interface ActionIProps<Tipo1 extends NumberOrString2 = string, Tipo2 = number> {
    action: Tipo1,
    timesTemp: Tipo2
}

const step5: ActionIProps = {
    action: 'delete',
    timesTemp: 123

} 


const arrHistoryAction: Array<ActionIProps> = []

const addAction = <Tipo extends ActionIProps>(obj: Tipo) => {
    console.log('addAction')
    console.log(obj)
    arrHistoryAction.push(obj)
}


addAction({
    action: 'delete',
    timesTemp: 123,
    teste: 'ola',
    id: 1
} )
console.log(arrHistoryAction)