//Desafio Conta bancária
// 3. criar classe Cliente e compor as classes concretas -> poupança e bancaria
// - nome
// - documento
//* no lugar de client e numero


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

class ContaPoupanca extends ContaBancaria {
    constructor(client, numero, aniversario) {
        super(client, numero)
        this.aniversario = new Date().toDateString()
    }
}



//challenge 3
class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
    }
}

const talison = new Cliente('Tálison', '3398419804-4')
const analidia = new Cliente('Analidia', '3398416047-0')


const client1 = new ContaCorrente(talison, 1)
const client01 = new ContaPoupanca(talison, 2)
const client2 = new ContaPoupanca(analidia, 3)
