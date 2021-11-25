/*
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
    pode rodar no seu computador **para analisar e pensar sobre o resultado.**
*/
{
    //1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
    let array
    console.log('a. ', array)
    //a. undefined

    array = null
    console.log('b. ', array)
    //b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    //c. 10

    let i = 0
    console.log('d. ', array[i])
    //d. [3]

    array[i+1] = 19
    console.log('e. ', array)
    //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const valor = array[i+6]
    console.log('f. ', valor)
    //f. 9
}

{
    //2. Leia o código abaixo com atenção 
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    //Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
    //Saida: SUBI NUM ÔNIBUS EM MIRROCOS

    const nome = prompt("Informe seu nome")
    const email = prompt("Informe seu e-mail")

    let resultado = `O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}`
    console.log(resultado)

}

{
    /*
        2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
        a) Imprima no console o array completo
        b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
        c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
    */
    let comida = ["Feijoada","Strogonoff","Macarrão","Bife","Arroz"]
    console.log(comida)

    console.log("Essas são as minhas comidas preferidas")
    
    comida.forEach( item =>{
      console.log(item)
    })


    let comidaPreferida = prompt("Qual sua comida preerida ")

    comida[1] = comidaPreferida
    console.log(comida)
}

{
    /*
        3. Faça um programa, seguindo os passos:    
        a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`        
        b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array        
        c) Imprima o array no console        
        d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2         
        e) Remova da lista o item de índice que o usuário escolheu.        
        f) Imprima o array no consoleImprima no console        
    */

    let listaDeTarefas = []
    let tarefa = prompt("Informe uma tarefa")
    listaDeTarefas.push(tarefa)
    tarefa = prompt("Informe outra tarefa")
    listaDeTarefas.push(tarefa)
    tarefa = prompt("Informe mais uma")
    listaDeTarefas.push(tarefa)
    console.log(listaDeTarefas)

    let index = prompt("Informe a índice da tarefa que já realizou, 1, 2, 3")
    listaDeTarefas.splice(index-1, 1)
    console.log(listaDeTarefas)
}

{    
    let frase = prompt("Informe uma frase")
    const array = frase.split(" ")
    console.log(array)
}

