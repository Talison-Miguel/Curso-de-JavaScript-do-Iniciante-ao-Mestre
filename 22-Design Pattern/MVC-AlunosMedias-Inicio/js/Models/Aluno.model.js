class alunoModel {
    // constructor(aluno) {
    //     this.nome = aluno.nome
    // }

    constructor({nome, _id, notas} = {notas: {}}) {
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.generateId() 
        this.notas = {...notas}

        if(this._id > alunoModel.maxId) {
            alunoModel.maxId = this._id
        }

        this.media = {}

        for(let materia in this.notas) {
            this.media[materia] = avarege(...this.notas[materia])
        }
    }

    generateId() {
        return alunoModel.maxId + 1
    }
}

alunoModel.maxId = 0