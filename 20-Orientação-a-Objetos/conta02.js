//Desafio Conta bancária
// 2. Criar duas classes que herdam de ContaBancaria
// - ContaCorrente
// - limite
// - sacar(valor)
// ---------------
// - ContaPoupanca
// - aniversario
// - sacar(valor)




class ContaBancaria {
    //sempre sera execultado
    constructor(cliente, numero) {
        if(this.constructor === ContaBancaria) {
            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    //aqui vai os metodos
    depositar(deposito) {
        this.saldo += deposito
        console.log('------------------------------')
        console.log(`R$${deposito} depositado com sucesso`)
        console.log('------------------------------')
        console.log(`Saldo disponivel: R$${this.saldo}`)
        console.log('------------------------------')
    }

    sacar(sacado) {
        if(ContaCorrente) {
            if(sacado > this.saldo ) {
                throw new Error(`Saldo disponivel R$${this.saldo}`)
            }
        }
        
        this.saldo -= sacado
        console.log('------------------------------')
        console.log(`R$${sacado} sacado com sucesso`)
        console.log('------------------------------')
        console.log(`Saldo disponível: R$${(this.saldo)}`)
        console.log('------------------------------')
    }
}



//challenge 2
class ContaCorrente extends ContaBancaria {
    constructor(client, numero) {
        super(client, numero)
        this.limiteCredito = 1000
    }

    sacarCredito(sacado) {
        if(sacado > this.limiteCredito) {
            throw new Error(`Limite de Credito R$${this.limiteCredito}`)
        }

        this.limiteCredito -= sacado
        console.log('------------------------------')
        console.log(`R$${sacado} sacado com sucesso`)
        console.log('------------------------------')
        console.log(`Credito disponível: R$${(this.limiteCredito)}`)
        console.log('------------------------------')
    }
}
const client2 = new ContaCorrente('Tálison', 2)


class ContaPoupanca extends ContaBancaria {
    constructor(client, numero, aniversario) {
        super(client, numero)
        this.aniversario = Date.now()
    }
}
const client3 = new ContaPoupanca('Miguel', 1)


// const client1 = new ContaBancaria('Tálison', '98419804-4') //nao funciona pq é uma classe abstrata