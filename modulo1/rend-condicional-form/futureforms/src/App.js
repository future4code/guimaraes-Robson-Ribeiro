import React from 'react';
import * as S from './styles';

import Question from '../src/components/Question/';

class App extends React.Component {
  state = {
    nextEtapa: 0
  }


  handleNextEtapa = () => {
    this.setState({ nextEtapa: this.state.nextEtapa + 1 });
    console.log("State: ", this.state.nextEtapa)
  }

  render(){

    if(this.state.nextEtapa === 0){
      return (
      <S.Container>
            
            <S.Form>
              <Question
                etapa={'ETAPA 1 - DADOS GERAIS'}
                question={'Qual o seu nome?'}
              />

              <Question
                question={'2. Qual sua Idade?'}
              />

              <Question
                question={'3. Qual seu e-mail?'}
              />

              <Question
                question={'4. Qual a sua escolarida?'}
                type={'list'}
              />   
              <button onClick={this.handleNextEtapa}>Próxima etapa</button>                  
          </S.Form> 
              </S.Container>
      )
    }else{
    if(this.state.nextEtapa === 1){
       return (<S.Container>
        <S.Form>
            <Question
              etapa={'ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR'}
              question={'5. Qual curso?'}
            />

            <Question
                question={'6. Qual a unidade de ensino?'}
            />
            <button onClick={this.handleNextEtapa}>Próxima etapa</button>  
        </S.Form> 
      </S.Container>)
    }else{
      if(this.state.nextEtapa === 2){
         return(
        <S.Container>
        <S.Form>
          <Question
              etapa={'ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO'}
              question={'5. Por que você não terminou um curso de graduação?'}
             />

              <Question
                question={'6. Você fez algum curso complementar?'}
                type={'curso'}
              />  
              <button onClick={this.handleNextEtapa}>Próxima etapa</button>  
        </S.Form> 
      </S.Container>
      )
      }else{
        return(
      <S.Container>
        <S.Form>
          <h1><b>O FORMULÁRIO ACABOU</b></h1>
          <p>Muito obrigado por participar! Entraremos em contato!</p>
        </S.Form> 
      </S.Container>
        )
      }
    }
    }
  }
}

export default App;
