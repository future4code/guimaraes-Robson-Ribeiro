/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
   let usuario = []
   let computador = []

   //Distribui 2 cartas para cada jogadores
   const dealCards = () =>{      
      let cards = []
      for(let i = 0; i < 2; i++){         
         cards.push( comprarCarta() )
      }
      return cards
   }

   //calcula vencedor
   const calculateWinner = (jogador1, jogador2) => {
      let player1Points = 0
      let player2Points = 0

      for(let i = 0; i < 2; i++){
         player1Points += jogador1[i].valor
         player2Points += jogador2[i].valor
      }

      if(player1Points === player2Points){
         imprimir(`Empate: \n usuário: ${player1Points}, cards: ${jogador1[0].texto}, ${ jogador1[1].texto}\n computador: ${player2Points},  cards: ${jogador2[0].texto}, ${ jogador2[1].texto}`)
      }else if(player1Points > player2Points){
         imprimir(`Usuário é o vencedor com ${player1Points} pontos, cards: ${jogador1[0].texto}, ${ jogador1[1].texto} \ncomputador: ${player2Points} pontos, cards: ${jogador2[0].texto}, ${ jogador2[1].texto}`)
         }else{
            imprimir(`Computador é o vencedor com ${player2Points} pontos, cards: ${jogador2[0].texto}, ${ jogador2[1].texto} \nusuário: ${player1Points} pontos, cards: ${jogador1[0].texto}, ${ jogador1[1].texto}`)
         }
   }

   const imprimir = (mensagem) => {
      console.log(mensagem)
   }

   let play = confirm("Quer iniciar uma nova rodada?")
   
   if(play){
      imprimir("Boas vindas ao jogo de Blackjack")
        
      usuario = dealCards()
      computador = dealCards()     
    
      calculateWinner(usuario,computador)
   }else{
      console.log("O jogo acabou")
   }
