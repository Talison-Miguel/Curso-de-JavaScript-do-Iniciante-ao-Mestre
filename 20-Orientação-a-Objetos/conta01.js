//Desafio Conta bancária

// 1. criar conta abstrata chamada ContaBancaria   
// - cliente   
// - numero   
// - saldo   
// - depositar(valor)   
// - sacar(valor)

class ContaBancaria  {
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
        this.saldo -= sacado
        console.log('------------------------------')
        console.log(`R$${sacado} sacado com sucesso`)
        console.log('------------------------------')
        console.log(`Saldo disponível: R$${(this.saldo)}`)
        console.log('------------------------------')
    }
}

const client1 = new ContaBancaria('Tálison')
// const client2 = new ContaBancaria('Tálison', '98419804-4') //nao funciona pq é uma classe abstrata