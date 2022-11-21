//Desafio Conta bancária
//polimorfismo
//criar uma classe especializada em trangerir.
//Essa classe tera um unico metodo execulte(contaOrigem, contaDestino, valor)
//tanto origem quanto destino precisasm ser isntancias de contabancaria
//tanto cc quanto o cp tem o metodo sacar(),  que tem implementaçoes diferentes
//idenpendente se for cc ou cp podemos chamar ese metodo

class Transferir {
    static execulte(contaOrigem, contaDestino, valor) {
        if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria) {
            throw new Error('Contas precisam herdar de ContaBancaria')
        }
        
        try {
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        } catch (error) {
            console.log('Deu ruim', error.message)
        }
    }
}


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

    get dadosCliente() {
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
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
    constructor(client, numero) {
        super(client, numero)
        this.aniversario = new Date().toDateString()
    }
}



//challenge 3
class Cliente {
    constructor(nome, documento, tipoDocumento) {
        if(this.constructor === Cliente) {
            throw new Error('A class Client é abstrata')
        }

        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}




//challenge 4
class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPF")
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CNPJ")
    }
}


const talisonMiguel = new PessoaFisica('TálisonMiguel', '042.337.296-61')
const amancio = new PessoaJuridica('Amancio' ,'083.367216/99-21')

const client1 = new ContaCorrente(talisonMiguel, 1)
const client2 = new ContaPoupanca(amancio, 2)
const client3 = new ContaPoupanca(talisonMiguel, 3)
client2.depositar(900)


console.log(client1.dadosCliente)
console.log(client2.dadosCliente)
console.log(client3.dadosCliente)


