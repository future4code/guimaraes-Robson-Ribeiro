// {
//     /*
//         1. Leia o código abaixo
//     */
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

//     if (numero % 2 === 0) {
//     console.log("Passou no teste.")
//     } else {
//     console.log("Não passou no teste.")
//     }

//     /*
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
//     R: Faz uma pergunta para usuário, validar se o resto da divisão é 0, se sim imprime no console log que Passou no teste, se não imprime que Não passou no teste.
    
//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
//     R: Somente número pares será informado que ele passou no teste

//     c) Para que tipos de números a mensagem é "Não passou no teste"?
//     R: Somente número impares será informado que ele não passou no teste.
//     */
// }

// {
//     /*
//         2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
//     */
//     let fruta = prompt("Escolha uma fruta")
//     let preco
//     switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         //break; // BREAK PARA O ITEM c.
//     default:
//         preco = 5
//         break;
//     }
//     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//     /*
//         a) Para que serve o código acima?
//         R: Para informar o preço da fruta que o usuário informou 

//         b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//         R: O preço será de 2.25

//         c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
//         impressa no console se retirássemos o `break` que está logo acima do `default` (o
//         `break` indicado pelo comentário "BREAK PARA O ITEM 
//         c.")
//         R:  Será informado o valor de 5 reais.
//         ?
//     */
// }

// {
//     /*
//         3. Leia o código abaixo
//     */
//     const numero = Number(prompt("Digite o primeiro número."))

//     if(numero > 0) {
//     console.log("Esse número passou no teste")
//         let mensagem = "Essa mensagem é secreta!!!"
//     }

//     console.log(mensagem)

//     /*
//     a) O que a primeira linha está fazendo?
//     R: Recebendo o número digitado pelo usuário

//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//     R: Se o número for maior ou menor ocorrera um erro, pois a variável mensagem existem somente dentro do bloco do IF
   

//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//     R: Sim, a variavel mensagem somente existe dentro do bloque IF

//     */

// }

// {
//     /*
//         1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para
//             isso.

//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//         Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
//     */
//     const idade = Number(prompt("Informe sua idade!!"))
//     const minima = 18

//     if(idade >= minima){
//         console.log("Você pode dirigir")
//     }else{
//         console.log(`Você não pode dirigir.`)
//     }

// }

// {
//     /*
//         2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para 
//         digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a 
//         mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
//     */

//     const turno = prompt("Prezado(a) aluno(a) precisamos que informe em qual turno você estuda, M (matutino), V (vespertino) ou N (noturno)")
//     const diaM = "Bom Dia!"
//     const tardeV = "Boa Tarde!"
//     const noiteN = "Boa Noite!"
//     if(turno.toUpperCase() === "M")
//         console.log(diaM)    
//     if(turno.toUpperCase() === "V")
//         console.log(tardeV)
//     if(turno.toUpperCase() === "N")
//         console.log(noiteN)
//     else
//     console.log("Informação invalida")
// }

// {
//     /*
//         3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora
//     */

//     const turno = prompt("Prezado(a) aluno(a) precisamos que informe em qual turno você estuda, M (matutino), V (vespertino) ou N (noturno)")
//     const diaM = "Bom Dia!"
//     const tardeV = "Boa Tarde!"
//     const noiteN = "Boa Noite!"
//     switch(turno){
//         case "M":
//             console.log(diaM)   
//             break
//         case "V":
//             console.log(tardeV)Robso
//             break
//         case "N":
//             console.log(noiteN)
//             break
//         default:
//             console.log("Informação invalida")
//             break
//     }
    
// }

// {
//     /*
//         4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só 
//         assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo 
//         de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão 
//         assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou 
//         amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom 
//         filme!", caso contrário, imprima "Escolha outro filme :("
//     */

//         const gerero = prompt("Qual o gêreno do filme que vamos assistir?")
//         const valorIngressoInformado = Number(prompt("Qual é o preço do ingresso?"))
//         const valorIngressoCondicao = 15
//         const gereroCondicao = "fantasia"
        
//         if(gerero.toLowerCase() === gereroCondicao && valorIngressoInformado >= valorIngressoCondicao)
//             console.log("Bom filme!")
//         else1
//             console.log("Escolha outro filme :(")
// }

////////////////DESAFIOS
{
    /*
        2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
        - Nome completo;
        - Tipo de jogo: IN indica internacional; e DO indica doméstico;
        - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
        - Categoria: pode ser as opções 1, 2, 3 ou 4;
        - Quantidade de ingressos

        O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, 
        ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o 
        usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
        Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando 
        que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
        multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    */

    const nomeCompleto = prompt("Informe seu nome completo")
    const tipoJogo = prompt("Informe o tipo de jogo \n "
    +"IN: Internacional \n "
    +"DT: Doméstica" )
    const etapaJogo = prompt("Informe a etapa do jogo \n "
    +"SF: Semi-Final \n "
    +"DT: Decisão de terceiro lugar \n "
    +"FI: Final")
    const categoria = prompt("Opções de categoria: 1, 2, 3 e 4")
    const quantidadeIngressos = prompt("Quantos ingresso deseja?")

    
    
}