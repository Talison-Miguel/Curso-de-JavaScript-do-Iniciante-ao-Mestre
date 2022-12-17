//faz a ligaçao entre os services e a view para renderizar
class EditAlunoCrontroller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.render(model)
    }
}