//tem as funçoes que vao tratar dos dados armazenados na array de alunos
class AlunosService {
    constructor() {
        this.alunos = []
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw TypeError('aluno must be a instance of AlunoModel')
        }
        this.alunos.push(aluno)
    }

    edit(aluno) {
        return aluno
    }
}