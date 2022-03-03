import React from "react";


//components
import Layout from "./components/Layout";

//css
import { GlobalStyle } from "./styles/GlobalStyles";




class App extends React.Component{
  render(){
    return (<>
      <Layout />
      <GlobalStyle />
    </>
    );
  }
  
}

export default App;
