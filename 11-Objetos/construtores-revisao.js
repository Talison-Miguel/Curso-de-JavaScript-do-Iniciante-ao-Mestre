console.clear()

// ▼ CONSTRUTOR //////////////////////////////

function Cafeteira (nomeDaCafeteira, unidades) {
	this.nome = nomeDaCafeteira
	this.unidades = unidades
	
	this.comprar = function (quantidade) {
		quantidade = quantidade || 1
		
		if (this.unidades >= quantidade) {
			this.unidades -= quantidade
			console.log('cafeteira vendida')
			console.log(`restam ${this.unidades} unidade`)
		} else {
			console.log('o produto está fora de estoque')
		}
	}
}

const taliCoffee = new Cafeteira('TaliCoffee', 10)
const jrCafe = new Cafeteira('JR Café', 5)

taliCoffee.comprar(8)
jrCafe.comprar(8)





// 1 - Crie uma Função Construtora para criar um Objeto que não seja do tipo Cafeteira e nem Carro.
// 2 - Esse objeto deverá ter um método(funçao dentro do obj) que altere uma propriedade do próprio objeto
// 3 - Ele deverá exibir o status da propriedade após a alteração do método


function MontarCavalo(pessoasMontadas, cela) {
  this.pessoas = pessoasMontadas
  this.equipamento = cela
  
  //Operador Ternário
  this.equipamento === true ? this.equipamento = "estava" : this.equipamento = "nao estava"
  
  this.andar = function (km) {
    if(this.pessoas <= 2) {
        console.log(`o cavalo carregou ${this.pessoas} pessoas e ${this.equipamento} usando a cela, ele andou por ${km} km`)
    } else {
      console.log('O cavalo nao aguenta essa quantidade de pessoas')
    }

  }
}

const cavalo = new MontarCavalo(2, true)

cavalo.andar(25)