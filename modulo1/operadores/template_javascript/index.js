
{
    /*Exercícios de interpretação de código*/

    {
        let atividade = "1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa."
        const bool1 = true
        const bool2 = false
        const bool3 = !bool2

        console.log(atividade)
        let resultado = bool1 && bool2
        console.log("a. ", resultado) //false

        resultado = bool1 && bool2 && bool3
        console.log("b. ", resultado)//false

        resultado = !resultado && (bool1 || bool2) 
        console.log("c. ", resultado)//true

        console.log("d. ", typeof resultado)

    }

    {
        let atividade = "2.Seu colega se aproxima de você falando que o código dele não funciona como devia. \n  Vamos ajudá-lo: consegue perceber algum problema? \n O que será impresso no console?"
        console.log(atividade)
        let primeiroNumero = prompt("Digite um número!")
        let segundoNumero = prompt("Digite outro número!")

        const soma = primeiroNumero + segundoNumero 
        console.log(`Resultado = ${soma}`) // 1+1 = 11

    }

    {
        //Minha solução
        let atividade = "3.Para o exercício anterior, sugira ao seu colega uma solução para que o valor \n impresso no console seja, de fato, a soma dos dois números."
        console.log(atividade)
        let primeiroNumero = Number(prompt("Digite um número!"))
        let segundoNumero = Number(prompt("Digite outro número!"))

        const soma = primeiroNumero + segundoNumero

        console.log(`Resultado esperado: ${soma}`) 

    }
}



{
    /*Exercícios de escrita de código*/
    {
        let atividade = "1. Faça um programa que: \n "+
        "a) Pergunte a idade do usuário \n "+
        "b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga \n "+
        "c) Imprima na console a seguinte mensagem: 'Sua idade é maior do que a do seu melhor amigo', seguido pela resposta (true ou false) \n "+
        "d) Imprima na console a diferença de idade (não tem problema se sair um número negativo) \n "
        
        let resposta = "Sua idade é maior do que a do seu melhor amigo?"
        console.log(atividade)


        let idade = Number(prompt("Qual é sua idade?"))
        let bestFriend = Number(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"))

        let result = idade >= bestFriend

        console.log(`${resposta} ${result}`)

    }

    {
        let atividade = "2. Faça um programa que: \n "+
        "a) Peça ao usuário que insira um número par \n "+
        "b) Imprima na console **o resto da divisão** desse número por 2. \n "+
        "c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código. \n "+
        "d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código"

        console.log(atividade)

        let numeroPar = Number(prompt("Informe o número par"))
        let divisor = 2
        let resultado = numeroPar % divisor
        
        /*para valores par o resultado esperado sempre foi 0, para impar o resultado foi 1 */
        if(resultado === 1){
            console.log(`O número informado ${numeroPar} é um valor impar`)
        }else{
            console.log(`O número informado ${numeroPar} é um valor par`)
        }
    }
    
    {
        let atividade = "3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console \n "+
        "a) A idade do usuário em meses \n "+
        "b) A idade do usuário em dias \n "+
        "c) A idade do usuário em horas"
        console.log(atividade)

        let idade = Number(prompt("Qual é sua indade?"))
        let anoAtual = new Date().getFullYear()
        let qtdMeses = 12
        let totalDiasNoAno = 365
        let horaPorDia = 24
        let item = ['meses', 'dias', 'horas']
        let resultadoMeses = (anoAtual - idade ) / qtdMeses
        let resultadoDias = idade * totalDiasNoAno
        let resultadoHoras = (horaPorDia * totalDiasNoAno) * idade

        let resposta = `A idade do usuário em ${item[0]} é ${resultadoMeses} \n `+
        `A idade do usuário em ${item[1]} é ${resultadoDias} \n `+ 
        `A idade do usuário em ${item[2]} é ${resultadoHoras}  `

       console.log(resposta)

    }

    {
        let atividade = "Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false: \n "+
        "O primeiro numero é maior que segundo? true \n "+
        "O primeiro numero é igual ao segundo? false \n "+ 
        "O primeiro numero é divisível pelo segundo? true \n "+
        "O segundo numero é divisível pelo primeiro? true \n "+
        "obs: O true ou false vai depender dos números inseridos e do resultado das operações. "
        console.log(atividade)
        let rest;
        let primeiroNumero = Number(prompt("Informe um número"))
        let segundoNumero = Number(prompt("Informe outro número"))

        let resultado = primeiroNumero > segundoNumero
        console.log(`O primeiro numero é maior que segundo? ${resultado}`)
        resultado = primeiroNumero === segundoNumero
        console.log(`O primeiro numero é igual ao segundo? ${resultado}`)
        rest = (primeiroNumero % segundoNumero) === 0
        console.log(`O primeiro numero é divisível pelo segundo? ${rest}`)
        rest = (segundoNumero % primeiroNumero) === 0
        console.log(`O segundo numero é divisível pelo primeiro? ${rest}`)

    }

}