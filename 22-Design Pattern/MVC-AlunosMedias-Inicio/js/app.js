
//Calcula a media por propiedade de cada aluno e cria uma propiedade chamda media
alunos.forEach( aluno => {
    aluno.media = {}

    for(let materia in aluno.notas) {
        aluno.media[materia] = avarege(...aluno.notas[materia])
    }
} )




//Inserir no thead 'nome' e cada uma das materias
const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

//recebe um obj e gera um array com as propiedades
let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return '<td>' + materia + '</td>'
}).join('')

htmlHeader.innerHTML += htmlHeaderMaterias
document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)




//Percorrer cada aluno e gerar o html para incluir no tbody
alunos.forEach(aluno => {
    const htmlBody = document.createElement('tr')
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach( materia => {
        htmlMedias += `<td>${aluno.media[materia]}</td>`
    } )
    htmlBody.innerHTML = htmlMedias
    document.querySelector('[data-table-alunos] tbody').appendChild(htmlBody)
})




//Adicionar aluno
const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    const nome = document.getElementById('first_name').value

    const newAluno = {
        _id: 0,
        nome,
        notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
        },
    }

    alunos.push(newAluno)
})