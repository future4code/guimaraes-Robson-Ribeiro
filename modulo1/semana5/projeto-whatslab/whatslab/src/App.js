import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button'; 
import React from 'react';

class App extends React.Component {

  state = {
    message: '',
    user: '',
    sendMessage: []
  }

  handleEnviar = () => {
    console.log(this.state.message);
    // this.setState({ sendMessage: this.state.message });
    // this.setState({ sendUser: this.state.user });

   
  }

  handleOnchangeUser = ( event ) => {
    this.setState({ user: event.target.value })
  }

  handleOnchangeMessage = ( event ) => {
    this.setState({ message: event.target.value })
  }

  render(){
    return (
      <div className="App">
    
        <div>
          <p readOnly={true} type="text" style={ {width: 500, height: 600} }>
            <span>{this.state.sendUser}</span>
            <p>{this.state.sendMessage}</p>
           
          </p>
        </div>
  
        <input placeholder={'Usuário'} value={this.state.user} onChange={this.handleOnchangeUser}/>
        <input placeholder={'Mensagem'} value={this.state.message} onChange={this.handleOnchangeMessage}/>
        
        <button onClick={this.handleEnviar}>Enviar</button>

      </div>
    );
  }
}

export default App;
