import React from "react";

import { getAllUser } from './services/api';

class App extends React.Component {

  state ={
    users: [],
    users2: []
  }

  componentDidMount(){
    getAllUser()
    .then(( response ) => { 
      this.setState({ users: response });
      console.log("getAllUsers", this.state.users);
    } )
  }
  
  render(){    
    return(<>
      <h1>oiiiiiii</h1>
    </>)
  }
}

export default App;
