/*
  Crie uma aplicação Node que recebe uma string representando uma operação matemática e 
  dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
  utilizando os 2 valores fornecidos.
*/

const operacao = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])

if(operacao === 'add'){
    console.log(`Resposta: ${numberOne + numberTwo}`)
}

if(operacao === 'sub'){
    console.log(`Resposta: ${numberOne - numberTwo}`)
}

if(operacao === 'mult'){
    console.log(`Resposta: ${numberOne * numberTwo}`)
}