// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 let arrayInvertido = []
 let itemArray = array.length
 let i = 1
 while(arrayInvertido.length != array.length){
    arrayInvertido.push(array[itemArray-i])
    i++
 }
 return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a - b );
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter( (item) => { return item % 2 === 0 })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
    array.map( (item) => item % 2 === 0? arrayPar.push(Math.pow(item, 2)) : undefined )
    return arrayPar
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = num1 >= num2? num1 : num2 >= num1? num2 : num1 
    let menor = num1 <= num2? num1 : num2 <= num1? num2 : num1

    divisivel = (maior % menor) === 0? true : false 

    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: maior - menor,
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPares = []
    let count = 0
    
   for(let item = 0; item < n; item++){
    if(count % 2 === 0)
        nPares.push(count)
        count += 2
   }
   return nPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let array = []
    array.push(ladoA, ladoB, ladoC)
   
    if(array.every((value, index, array) => value === array[0]) === true){
        return "Equilátero"
    } else if(array.filter((item, index) => array.indexOf(item) != index ).length === 0){
        return "Escaleno"
    }else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {       
    if(array.length <= 2){  
        return array
    }else{
        let maior = Math.max.apply(null,array)
        let menor = Math.min.apply(null,array)
        let arrayFiltro = []
        let maiorMenor = []

        arrayFiltro = array.filter( item => {
           return item != maior && item != menor
        })            
        maiorMenor.push(Math.max.apply(null,arrayFiltro))
        maiorMenor.push(Math.min.apply(null,arrayFiltro))
        return maiorMenor
    }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = ""
    filme.atores.map( ator => {
        return atores += ator+", "
    })
    atores = atores.substring(0, atores.length-2)
    let mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`

   return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoas) {
   return {...pessoas,  nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let minHeight = 1.5
   let minAge = 14
   let maxAge = 60
   return peopleAuthorized(pessoas, minHeight, minAge, maxAge)
}

const peopleAuthorized = ( pessoas, minHeight, minAge, maxAge ) => {
    return pessoas.filter( people => {
        return people.idade > minAge && people.idade < maxAge && people.altura > minHeight
    })    
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let minHeight = 1.5
    let minAge = 14
    let maxAge = 60
    return peopleDenied(pessoas, minHeight, minAge, maxAge)
}

const peopleDenied = (pessoas, minHeight, minAge, maxAge) =>{
    return pessoas.filter( people => {
        return people.idade <= minAge || people.idade >= maxAge || people.altura <= minHeight
    })    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) { 
    let count = contas.length
    
    for(let i = 0; i < count; i++){
        contas[i].saldoTotal = calcBalance(contas[i].saldoTotal, calcPurchases(contas[i].compras))
        contas[i].compras = []
    }
    return contas
}

const calcBalance = (balance, purchase) => {
    const result = balance - purchase
    return result
}

const calcPurchases = (compras) => {
    let purchases = 0
    for(let i = 0; i < compras.length; i++){
        purchases += compras[i]
    }
    return purchases
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a,b) => a - b )
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}