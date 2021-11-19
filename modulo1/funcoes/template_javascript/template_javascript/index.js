// {
//     /*
//         1. Leia o código abaixo
//     */
//     function minhaFuncao(variavel) {
//         return variavel * 5
//     }

//     console.log(minhaFuncao(2)) //10
//     console.log(minhaFuncao(10)) //50
//     /*
//         a) O que vai ser impresso no console?
//         //10 e 50
//         b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
//         função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//         // eu creio que um erro.
//     */
// }

// {

//     /*
//         2. Leia o código abaixo
//     */
        
//     let textoDoUsuario = prompt("Insira um texto");
    
//     const outraFuncao = function(texto) {
//         return texto.toLowerCase().includes("cenoura")
//     }
    
//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)       

//     /*
//         a. Explique o que essa função faz e qual é sua utilidade
//         R:  Essa função recebe um texto informado pelo usuário e muda esse texto para minusculo
//             e verifica se no texto informado existe a palavra cenoura, se sim retorna true se não false

//         b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//         i.  Eu gosto de cenoura
//         R:  true

//         ii. CENOURA é bom pra vista
//         R:  true

//         iii. Cenouras crescem na terra
//         R: true

//     */
// }
// {
//     let mensagem = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//     const minhaFuncao = function(){
//         return mensagem
//     }

//     let retMensagem = minhaFuncao()

//     retMensagem = retMensagem.replace('Caio','Robson')
//     retMensagem = retMensagem.replace('23','33')
//     retMensagem = retMensagem.replace('e sou estudante','trabalho e estudo')
//     console.log(retMensagem)

//     const fnPessoa = function(nome, idade, endereco, profissao){
//         let mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`
//         return mensagem
//     }

//     let retMensagemPessoa = fnPessoa("Robson",33,"São Paulo","Analista de sistema")
//     console.log(retMensagemPessoa)
// }

// {
//     /*
//         2. Escreva as funções explicadas abaixo:
//     */

//     /*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//         faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no 
//         console o resultado.
//     */
//     const fnSoma = function(numero1, numero2){
//         return numero1 + numero2
//     }
//     console.log(fnSoma(2,2))

//     /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
//         primeiro número é **maior ou igual** ao segundo.
//     */
//     const fnPrimeiroMaiorSegundo = function(numero1, numero2){
//         return numero1 >= numero2
//     }
//     console.log(fnPrimeiroMaiorSegundo(1,1))

//     /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele 
//         é par ou não
//     */

//     const fnNumeroPara = function(numero){
//         let resultado = numero % 2
//         if(resultado === 0){
//             return true
//         }
//         return false
//     }

//     console.log(fnNumeroPara(1))

//     /*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o 
//         tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.    
//     */
//    const fnTamanhoMensagem = function(string){
//        let mensagem = `Mensagem: ${string.toUpperCase()} tamanho: ${string.length}`
//        console.log(mensagem)
//    }

//    fnTamanhoMensagem("Minha mensagem")

   
// }

{
   /*
    3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação 
        e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 
        funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre 
        no console o resultado das operações:
   */ 

    let numero1 = Number(prompt("Informe um número"))
    let numero2 = Number(prompt("Informe outro número"))

    const fnSoma = function(){
        return numero1 + numero2
    }

    const fnSubtracao = function(){
        return numero1 - numero2
    }

    const fnMuliplicacao = function(){
        return numero1 * numero2
    }

    const fnDivisao = function(){
        return numero1 / numero2
    }

    let soma = fnSoma()
    let subtracao = fnSubtracao()
    let multiplicao = fnMuliplicacao()
    let divisao = fnDivisao()

    let resultado = `Numeros inseridos: ${numero1} e ${numero2}
Soma: ${soma} 
Subtração: ${subtracao}
Multiplicação: ${multiplicao} 
Divisão: ${divisao}`

    console.log(resultado)


}