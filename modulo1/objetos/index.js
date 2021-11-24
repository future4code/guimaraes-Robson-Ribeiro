// {
//     /*
//         1. Leia o código        
//     */
//     const filme = {
//         nome: "Auto da Compadecida", 
//         ano: 2000, 
//         elenco: [
//             "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//             "Virginia Cavendish"
//             ], 
//         transmissoesHoje: [
//             {canal: "Telecine", horario: "21h"}, 
//             {canal: "Canal Brasil", horario: "19h"}, 
//             {canal: "Globo", horario: "14h"}
//             ]
//     }
    
//     //a) O que vai ser impresso no console?
//     console.log(filme.elenco[0]) // "Matheus Nachtergaele"
//     console.log(filme.elenco[filme.elenco.length - 1]) // "Virginia Cavendish"
//     console.log(filme.transmissoesHoje[2]) //  {canal: "Globo", horario: "14h"}
// }

// {
//     // 2. Leia o código abaixo
//     const cachorro = {
//         nome: "Juca", 
//         idade: 3, 
//         raca: "SRD"
//     }
    
//     const gato = {...cachorro, nome: "Juba"}
    
//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
    
//     //a) O que vai ser impresso no console?
//     //Nome: Juca, idade: 3, raca: SRD
//     //Nome: Juba, idade: 3, raca: SRD
//     //Nome: Jubo, idade: 3, raca: SRD

//     //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//     //Copia o objeto    
// }

// {
//     // 3. Leia o código abaixo
//     function minhaFuncao(objeto, propriedade) {
//         return objeto[propriedade]
//     }
    
//     const pessoa = {
//       nome: "Caio", 
//       idade: 23, 
//       backender: false
//     }
    
//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))
    
//     //a) O que vai ser impresso no console?
//     //false
//     //undefine

//     //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//     //No primeiro caso ele encontrou a propriedade backender e imprimiu seu valor.
//     //No segundo caso ele add uma nova propriedade altura porém ela não tem valor definido.

// }

// {
//     // 1. Rsolva os passos a seguir
//         /*
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um 
//             array que sempre terá exatamente três apelidos). Depois, escreva uma função que
//             recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:     
//         */
//        const pessoa = {
//            nome: "Amanda",
//            apelidos: ["Amandinha", "Mandinha", "Mandi"]
//        }

//        function imprimirObjeto(objeto){
//            return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`
//        }

//        //imprimirObjeto(pessoa)        
//        /*
//         b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da 
//         propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função 
//         feita no item anterior passando como argumento o novo objeto
//        */

//         const novoObjeto = {
//             ...pessoa, 
//             apelidos: ["Ap1","Ap2","Ap3"]
//         }

//         console.log(imprimirObjeto(novoObjeto))
// }

// {
//     // 2. Resolva os passos a seguir
//     /*
//         a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//         b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//         1. O valor de `nome`
//         2. O numero de caracteres do valor `nome`
//         3. O valor de `idade`
//         4. O valor de `profissão`
//         5. O numero de caracteres do valor `profissão`
//     */

//         const pessoaUm = {
//             nome: "Bruno",
//             idade: 23,
//             profissao: "Instrutor"
//         }

//         const pessoaDois = {
//             nome: "Rafael",
//             idade: 30,
//             profissao: "Analista"
//         }

//         function imprimiObjeto(objetoUm, objetoDois){            
//             let msg = ""
//             const meuObjetoFinal = {
//                 obj: [objetoUm, objetoDois]
//             }

//             meuObjetoFinal.obj.forEach(item => {
//               msg = `1. O valor de nome: ${item.nome}
// 2. O número de caracteres do valor nome:  ${item.nome.length}
// 3. O valor de idade: ${item.idade}
// 4. O valor de profissão: ${item.profissao}
// 5. O número de caracter do valor profissão: ${item.profissao.length}
//               `
//               console.log(msg)
//           });
//         }

//         imprimiObjeto(pessoaUm, pessoaDois)
// }
{
    /*
        3. Resolva os passos a seguir:         
        a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`        
        b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
        seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar 
        como `true`)        
        c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do 
        array de `carrinho`. Invoque essa função passando os três objetos criados.                
        d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    */
   
    let carrinho = []      
       
    const addItemCarrinho = (fruta) => {
        carrinho.push(fruta)
        return carrinho
    }

    const addFrunta = (nome) => {
        let fruta = {
            nome: nome,
            disponibilidade: true
        }
        return addItemCarrinho(fruta)            
    }
       
    addFrunta("Mamão")
    addFrunta("Maçã")
    addFrunta("Banana")
    
    console.log("Carrinho: ", carrinho)
}