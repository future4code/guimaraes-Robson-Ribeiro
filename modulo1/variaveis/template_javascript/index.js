/*
Exercícios de interpretação de código
    1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
        let a = 10
        let b = 10
        console.log(b)
        b = 5
        console.log(a, b)    

    2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
        let a = 10
        let b = 20
        c = a
        b = c
        a = b 
        console.log(a,b,c)
    
    3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais

        let horasTrabalhada = prompt("Quantas horas você trabalha por dia?")
        let valorDia = prompt("Quantos você recebe por dia?")
        alert(`Você recebe ${valorDia/horasTrabalhada} por hora`)
*/

/*Exercícios de escrita de código
    1.Construa um programa, seguindo os seguintes passos:    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
   
    let nome = prompt("Qual é o seu nome?")
    let idade = Number(prompt("Quantos anos você tem?"))
    //não foi possível identificar os valores das variaveis pq não informei o tipo
    //como eu não usei o Number() ele entendeu que minha idade é uma string
    //console.log(typeof nome, typeof idade)

    console.log(`Olá ${nome} você tem ${idade} anos.`)
    alert(`Olá ${nome} você tem ${idade} anos.`)

    2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    a) Crie três novas variáveis, contendo as respostas
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    let perguntaOne = "Você tem carro?"
    let perguntaTwo = "Você malha?"
    let perguntaThree = "Você tem filho?"

    let carro = prompt(perguntaOne)
    let academia = prompt(perguntaTwo)
    let filho = prompt(perguntaThree)

    console.log(`
        ${perguntaOne} - ${carro} \n
        ${perguntaTwo} - ${academia} \n
        ${perguntaThree} - ${filho} 
    `)

    Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 
    
    let a = 10
    let b = 25

    let valorA = a
    let valorB = b

    a = b
    b = a

    a = prompt(`O valor inicial de A é, ${valorA} e foi trocado para  ${a}.
    Qual o novo valor de A?`)
    b = prompt(`O valor inicial de B é, ${valorB} e foi trocado para  ${valorA}.
    Qual o novo valor de B?
    `)

    valorA = b
    valorB = a

    console.log(`O novo valor de A é, ${a} e foi trocado para ${valorA} `)
    console.log(`O novo valor de B é , ${b} e foi trocado para ${valorB}`)
*/

//Desafios
let primeiroValor = Number(prompt("Informe o primeiro valor?"))
let segundoValor = Number(prompt("Informe o segundo valor?"))

console.log(`O primeiro número somando ao segundo número resulta em: ${primeiroValor + segundoValor}`)
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${primeiroValor * segundoValor}`)




