
/*
    a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    R: usando process.argv[2]

    b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a 
    seguinte estrutura:

*/
const nome =  process.argv[2]
const age = process.argv[3]

console.log(`Olá, ${name}! Você tem ${age} anos.`)

