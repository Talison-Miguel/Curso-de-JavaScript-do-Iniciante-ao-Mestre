const numeros = [1 , 4, 5, 6, 8, 10, 1, 4, 8, 10, 99, 99]

let arrayFiltrado = numeros.reduce(function (numAcumulados, atual, indice, array) {
  //se tal numero do array nao existir no aculmulador, voce adiciona ele
  if (numAcumulados.indexOf(atual) === -1) {
    numAcumulados.push(atual)
  }
  
  //o index off verifica se o valor existe, se nao existir retorna -1, se exister retorna o indice dele

  return numAcumulados
}, [])
console.log(arrayFiltrado)