import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button'; 
import React from 'react';

//css
import * as S from './style'


class App extends React.Component {

  state = {
    message: '',
    user: '',
    typing: [],
    count: 0
  }


  handleEnviar = () => {
    const sendMessage = this.state.typing;
    
    sendMessage.push({
      userTyping: this.state.user,
      messageUserTyping: this.state.message,
      url: 'https://picsum.photos/50/5' + this.state.count.toString()
    });
    this.setState({ count: this.state.count + 1})
    this.setState({ userTyping: [...this.state.typing, sendMessage ] });
  }

  handleOnchangeUser = ( event ) => {
    this.setState({ user: event.target.value })
  }

  handleOnchangeMessage = ( event ) => {
    this.setState({ message: event.target.value })
  }


  render(){
      
    return (
      <S.Container key={0}>
        <S.WhatsTyping>
         {this.state.typing.map( (type, index ) => {
           return (<>
                    <S.Container style={{ display: 'inline' }}>  
                      <S.Photo src={type.url} alt="Icon" />                   
                      <S.WhatsUserName key={index}>
                        
                        {type.userTyping}: 

                      </S.WhatsUserName>
                      <S.WhatsUserNameTyping>{type.messageUserTyping}</S.WhatsUserNameTyping> 
                      <hr />
                    </S.Container>
            </>
          )           
         })}
        </S.WhatsTyping>
        <S.WhatsContainer height={'50px'}>
          <Input 
            width={'15%'} 
            height={'30px'} 
            placeholder={'Usuário'} 
            value={this.state.user} 
            onChange={this.handleOnchangeUser}
          />
          
          <Input 
            width={'66%'} 
            height={'30px'} 
            placeholder={'Mensagem'} 
            value={this.state.message} 
            onChange={this.handleOnchangeMessage}
          />     

          <Button 
            width={'15%'} 
            height={'35px'} 
            onClick={this.handleEnviar}>
              Enviar
          </Button>

        </S.WhatsContainer>
        

      </S.Container>
    );
  }
}

export default App;
