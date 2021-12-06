{
    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" }
      ]
      
      const novoArrayA = usuarios.map((item, index, array) => {
         console.log("Item: ", item, "Index: ", index, "Array: ", array)
      })


      //O que vai ser impresso no console?
      //Será impresso o elemento, index do elemento e o array com todas as posições
}

{
    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
      ]
      
      const novoArrayB = usuarios.map((item, index, array) => {
         return item.nome
      })
      
      console.log("Array Name:",novoArrayB)

      //a) O que vai ser impresso no console?
      //será impresso um array com os nomes, Amanda, Laís e Letícia

}
{
    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
      ]
      
      const novoArrayC = usuarios.filter((item, index, array) => {
         return item.apelido !== "Chijo"
      })
      
      console.log("Array Chijo: ",novoArrayC)
      //a) O que vai ser impresso no console?
      //Será impresso Mandi e Laura

}

{
    /*
        1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
        operações pedidas nos itens abaixo utilizando as funções de array map e filter:

        a) Crie um novo array que contenha apenas o nome dos doguinhos
        b) Crie um novo array apenas com os [cachorros salsicha]
        c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: 
        "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
    */
        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
         ]

         const getMensagem = (namePoodle) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${namePoodle}!` 

         const petsNames = pets.map( pet => pet.nome )
         console.log("Pets Name: ", petsNames)

         const petsSalsicha = pets.filter( pet => pet.raca.toLocaleLowerCase() === "salsicha" )
         console.log("Pets Salsicha: ",petsSalsicha)

         const poodles = pets.filter( pet => pet.raca.toLocaleLowerCase() === "poodle")
         console.log("Pets: ", poodles)
         const gift = poodles.map( poodle => getMensagem(poodle.nome) )
         console.log("Poodle desconto: ", gift)
      

}

{
    /*
        2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
        utilizando as funções de array map e filter: 
        a) Crie um novo array que contenha apenas o nome de cada item

        b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

        c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

        d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"    

        e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    */

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
     const getMensagemProduto = (produtoNome, produtoPreco) => `Compre ${produtoNome} por R$ ${produtoPreco}`

     const produtosName = produtos.map( produto => produto.nome ) //a
     console.log("Produtos Nome:",produtosName)
     const produtoDesconto = produtos.map( produto => {
         return {
             nome: produto.nome,
             preco: produto.preco,
             desconto: (produto.preco * 0.5).toFixed(2)
         }
     }) //b
     console.log("Produto Desconto:", produtoDesconto)

     const produtoCategoria = produtos.map( produto => produto.categoria) //c
     console.log("Produto categoria:", produtoCategoria)

     const produtoYpes = produtos.filter( produto => produto.nome.includes("Ypê")) //d 
     console.log("Produto Ypê: ",produtoYpes)
     console.log("Produto Menssagem:", produtoYpes.map( produtoYpe => getMensagemProduto(produtoYpe.nome, produtoYpe.preco))) //e
    
}

{
    /*
        1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
        a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**    

        b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
    */
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
        ]

    
    const pokemonsOrdem = pokemons.map( pokemon => pokemon.nome ).sort()
    const pokemonsTipos = pokemons.map( pokemon => pokemon.tipo )
    

    const distinct = (value, index, array) =>{
        return array.indexOf(value) === index
    }

    const pokemonsTipo = pokemonsTipos.filter(distinct)
    console.log(pokemonsTipo)
}