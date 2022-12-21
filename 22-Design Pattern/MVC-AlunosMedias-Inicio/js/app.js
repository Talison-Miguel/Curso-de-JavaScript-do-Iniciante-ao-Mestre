const alunosOld = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
        },
    },
    {
        _id: 2,
        nome: "Tálison",
        notas: {
            portugues: [9, 9, 9, 9],
            matematica: [10, 9, 8, 9],
            historia: [8, 9, 9, 6],
            ciencias: [10, 7, 8, 9],
        },
    },
];

const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), new MateriasService().materias)

const alunosControler = new AlunosControler(alunosService, alunosView)

const formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    const nome = document.getElementById('first_name').value

   alunosControler.add({ nome })
})


const inputSeach = document.querySelector('#search_name')
inputSeach.addEventListener('input', function() {
    const name = this.value
    sessionStorage.setItem('search', name)

    if(name.length > 2 || name.length === 0) [
        alunosControler.search(name)
    ]
})

const inputEvent = new Event('input')
const inputEvent_IE = document.createEvent('Event')
inputEvent_IE.initEvent('input', true, true)

if(sessionStorage.getItem('search')) {
    inputSeach.value = sessionStorage.getItem('search')
    // inputSeach.dispatchEvent(inputEvent)
    inputSeach.dispatchEvent(inputEvent_IE)

}