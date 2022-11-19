//Desafio Conta bancária
// 4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.
// Pessoa Física tem documento CPF e Juridica tem documento CNPJ


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
    constructor(client, numero) {
        super(client, numero)
        this.aniversario = new Date().toDateString()
    }
}



//challenge 3
class Cliente {
    constructor(nome, documento) {
        if(this.constructor === Cliente) {
            throw new Error('A class Client é abstrata')
        }

        this.nome = nome
        this.documento = documento
    }
}




//challenge 4
class PessoaFisica extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf)
        this.nome = nome
        this.documento = `cpf: ${cpf}` 
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, cnpj) {
        super(nome, cnpj)
        this.nome = nome
        this.documento = `cnpj: ${cnpj}`
    }
}


const talisonMiguel = new PessoaFisica('TálisonMiguel', '042.337.296-61')
const amancio = new PessoaJuridica('Amancio' ,'083.36721699')

const client1 = new ContaCorrente(talisonMiguel, 1)
const client01 = new ContaPoupanca(amancio, 2)
const client2 = new ContaPoupanca(talisonMiguel, 3)
