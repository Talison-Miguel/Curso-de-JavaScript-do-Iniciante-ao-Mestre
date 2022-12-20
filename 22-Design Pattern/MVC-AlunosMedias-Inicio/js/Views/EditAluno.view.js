class EditAlunoView {
    constructor(form, materias) {
        // this.render()
        this.form = form
        this.container = form.querySelector('[data-edit-notas]')
        this.materias = materias
    }

    render(aluno) {
        const html = this.materias.map( materia =>  `
            <div class="row">
                <div class="input-field col s4">
                <input
                    id="materia_${materia}"
                    type="text"
                    class="validate"
                    disabled
                    value="${materia}"
                />
                </div>
                <div class="input-field col s2">
                <input
                    id="nota_materia_1"
                    type="number"
                    class="validate"
                />
                </div>
                <div class="input-field col s2">
                <input
                    id="nota_materia_2"
                    type="number"
                    class="validate"
                />
                </div>
                <div class="input-field col s2">
                <input
                    id="nota_materia_3"
                    type="number"
                    class="validate"
                />
                </div>
                <div class="input-field col s2">
                <input
                    id="nota_materia_4"
                    type="number"
                    class="validate"
                />
                </div>
            </div>
        `).join(' ')
        
        this.container.innerHTML = html
    }
}