const data = new Date()
console.log(data)
console.log(data.getDay()) // Dia da semana
console.log(data.getDate()) //Dia do mes
console.log(data.getMonth() + 1) //O mes do ano, si qye começa a contar no 0, por isso da um numero a meno
console.log(data.getTime()) //Numero de milissegundos desde 1970
console.log(data.getFullYear()) //O ano
console.log(data.getHours()) //A hora do dia
console.log(data.getUTCHours()) //A hora universal

console.log("_______")

console.log(data.toString()) //Mostra a data como string e hora
console.log(data.toDateString()) //Mostra a data como string
console.log(data.toISOString()) //Mostra o Ano, mes, dia e hora, localizada
console.log(data.toLocaleString()) //Mostra a data como string e hora, localizada
console.log(data.toLocaleString("pt-Br", {month: "long", weekday: "long", day: "numeric", year: "numeric"})) //Mostra a data como string e hora, localizada, com parametros especificos
console.log(data.toLocaleDateString()) //Mostra a data como string, localizada
console.log(data.toUTCString()) //Mostra a data como string e hora, só que universal





