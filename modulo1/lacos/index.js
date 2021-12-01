{
    let valor = 0
    for(let i = 0; i < 5; i++) {
    valor += i
    }
    console.log(valor) 
    //imprime 10
}

{
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
    if (numero > 18) {
            console.log(numero, lista.indexOf(numero))
        }
    }
    //a) O que vai ser impresso no console?
    //Impremi do 19 ao 30
    //b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é 
    //suficiente? Se sim, o que poderia ser usado para fazer isso?
    //indexOf(numero)
}

{
   debugger
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    }

}

{
    /*
        1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
        a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

        b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    */
  2
    const qtdBichinhos = Number(prompt("Informe quantos bicho de estimação vc tem?"))
    let meusBichinhos = []
    let nomeBichinho = ""

if(qtdBichinhos === 0){
    imprimir("Que pena! Você pode adotar um pet!")
}else{
    for(let index = 0; index < qtdBichinhos; index++ ){
        nomeBichinho = prompt(`Informe o nome do seu ${index+1}© bichinho`)
        meusBichinhos.push(nomeBichinho)
    } 
    imprimir(meusBichinhos)
}    
    
    function imprimir(objeto){
        console.log(objeto)
    }
}

{
    /*
        2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
        Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas

        a) Escreva um programa que **imprime** cada um dos valores do array original.

        b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

        c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

        d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

        e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    */
    let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

    const imprimirArrayOriginal = (array) => {
        console.log(array)
    }

    const imprimirArrayDivididoPor10 = (array) => {
        for(let i = 0; i < array.length; i++){
            console.log(`Valor original ${array[i]}, valor dividido por 10, ${array[i] / 10}`)
        }
    }

    const imprimirArrayValoresPar = (array) => {
        let arrayPar = []
        for(let i = 0; i < array.length; i++){
            if( (array[i] % 2) === 0  ){
                    console.log(arrayOriginal[i] )
            }
        }
    }  

    const imprimirNovoArray = (array) => {
        let novoArray = []
        for(let i = 0; i < array.length; i++){
            novoArray.push(`O elemento do índex ${array.indexOf(array[i])} é: ${array[i]}.`)        
        }
        console.log(novoArray)
    } 

    const imprimirMaiorMenoNumeroArray = (array) => {
        let maiorNumero = Math.max(...array)
        let menorNumero = Math.min(...array) 

        console.log(`Maior número ${maiorNumero}, Menor número ${menorNumero}`)
    }

 imprimirArrayOriginal(arrayOriginal) //a
 imprimirArrayDivididoPor10(arrayOriginal) //b
 imprimirArrayValoresPar(arrayOriginal) //c
 imprimirNovoArray(arrayOriginal)
imprimirMaiorMenoNumeroArray(arrayOriginal)


}