import React from "react";
import axios from "axios";
import { getAllUser, createUser, deleteUser } from './services/api';

//GlobalStyle
import GlobalStyle from "./styles/globalStyles";

//css
import * as S from './styles';

//components
import Users from "./components/Users";

class App extends React.Component {

  state ={
    inputUserName: '',
    inputUserEmail: '',
    isCreating: false,
    users: [],
    sistemaLogSuccess: [],
    sistemaLogError: [],
    createUser: ''
  }

  componentDidMount(){
    this.apiLabenusersGetAllUser();
  }

  handleInputUserName = (event) =>{
    this.setState({ inputUserName: event.target.value });
  }
 
  handlesInputUserEmail = ( event ) => {
    this.setState({ inputUserEmail: event.target.value })
  }

  handleCreateUser = () => {
    const { inputUserEmail,  inputUserName } = this.state
    
    if(inputUserEmail.length > 0 && inputUserName.length > 0){
      this.apiLabenusersCreateUser(inputUserName,inputUserEmail );
      this.setState({ inputUserEmail: '', inputUserName: '' })
    }

    if(inputUserEmail.length === 0 || inputUserName.length === 0){
      alert("É necessário informar um usuário e e-mail");
    }
  }

  apiLabenusersCreateUser = ( name, email ) => {
    createUser(name, email)
    .then((response) => {
    
      if(response.status === 200 || response.status === 201){
        this.setState({ sistemaLogSuccess: response })
        this.apiLabenusersGetAllUser();
      }

      if(response.status === 404){
        alert("Usuário já cadastrado")
      }

      if(response.status === 400){
        alert("O e-mail informado é inválido!");
      }

    }).catch((error) => {
      console.log("Ops, algo deu errado", error);
    });
  }

  apiLabenusersGetAllUser = () => {
      getAllUser()
      .then(( response ) => { 
        this.setState({ users: response.data });
        localStorage.setItem('users', JSON.stringify(response.data));
      } )
  }

  handleDeleteUser = (id) => {
      console.log("OnClick delete:", id);
      deleteUser(id)
      .then((response) => {
        if(response.status === 200){
          alert("Registro deletado com sucesso")
          this.apiLabenusersGetAllUser();
        }
       })
      .catch((error) => { console.log("delete: error", error) })
  }

  render(){    
    return(<>       
        <S.Conatiner className="container">
         <S.FormCadastroUser>        
           
            <S.Info className="info">
              <S.Label>Nome: </S.Label>
              <S.Input 
                type={'text'} 
                placeholder={'informe um nome'}
                value={this.state.inputUserName}
                onChange={this.handleInputUserName}  
              />
            </S.Info>
            
            <S.Info>
              <S.Label>Email: </S.Label>
              <S.Input 
                type={'email'} 
                placeholder={'informe um e-mail'}
                value={this.state.inputUserEmail}
                onChange={this.handlesInputUserEmail}  
              />
            </S.Info>

            <S.Button onClick={this.handleCreateUser}>Salvar</S.Button>

              <S.Separetor />

              <S.Title>Lista de Usuários Cadastrados</S.Title>

              <S.Separetor />
              
              <S.Grid className="lista-users">

                <S.TextColumnId>ID</S.TextColumnId>
                <S.TextColumnName>Nome</S.TextColumnName>
                <S.TextColumnExcluir>Excluir</S.TextColumnExcluir>

                <Users 
                  users={this.state.users} 
                  handleDeleteUser={this.handleDeleteUser}
                />

              </S.Grid>
              
            
         </S.FormCadastroUser>         
        </S.Conatiner>
  
        <GlobalStyle />
    </>)
  }
}

export default App;
