import React from "react";
import axios from "axios";
import { getAllUser, createUser } from './services/api';

//GlobalStyle
import GlobalStyle from "./styles/globalStyles";

//css
import * as S from './styles';

//components
import ListUsuario from "./components/ListaUsuario";

class App extends React.Component {

  state ={
    users: [],
    errosSistema: [],
    createUser: ''
  }

  componentDidMount(){
    // getAllUser()
    // .then(( response ) => { 
    //   this.setState({ users: response.data });
    //   console.log("getAllUsers", this.state.users);
    // } )

    // createUser('Patricia','paty@gmail.com')
    // .then((response) => {

    //   if(response.status === 200){
    //     this.setState({ createUser: response })
    //   }

    //   if(response.status === 404){
    //     alert("Usuário já cadatrado: "+ response.data.message)
    //   }

    // }).catch((error) => {
    //   console.log("createUser error", error);
      
    // });
  }

  render(){    
    return(<>       
        <S.Conatiner className="container">
         <S.FormCadastroUser>        
           
            <S.Info className="info">
              <S.Label>Nome: </S.Label>
              <S.Input type={'text'} placeholder={'informe um nome'}/>
            </S.Info>
            
            <S.Info>
              <S.Label>Email: </S.Label>
              <S.Input type={'email'} placeholder={'informe um e-mail'}/>
            </S.Info>

            <S.Button>Salvar</S.Button>

              <S.Sepador />

              <S.Title>Lista de Usuários Cadastrados</S.Title>

              <S.Sepador />
              
              <S.ListUser className="lista-users">

                <S.TextColumn>ID</S.TextColumn>
                <S.TextColumn>Nome</S.TextColumn>
                <S.TextColumn>Excluir</S.TextColumn>

                <ListUsuario 
                  // hasItem={false}
                  // id={'1'}
                  // name={'Robson Rodrigues Ribeiro'}
                  // icon={'Icon'}
                />
              </S.ListUser>
              
            
         </S.FormCadastroUser>         
        </S.Conatiner>
  
        <GlobalStyle />
    </>)
  }
}

export default App;
