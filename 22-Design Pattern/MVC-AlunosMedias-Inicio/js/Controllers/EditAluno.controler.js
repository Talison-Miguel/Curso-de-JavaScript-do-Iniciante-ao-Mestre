//faz a ligaçao entre os services e a view para renderizar
class EditAlunoCrontroller {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service
        this.view.render(model)
    }

    edit(aluno, nome) {
        aluno.nome = nome

        // {
        //     _id: 0,
        //     nome: "chico melato",
        //     notas: {
        //         portugues: [1, 1, 2, 2],
        //         matematica: [2, 2, 2, 2],
        //         historia: [2, 2, 3, 3],
        //         ciencias: [3, 3, 3, 3],
        //     },
        // }

        const notas = {}

        this.service.edit(aluno, notas)
    }
}