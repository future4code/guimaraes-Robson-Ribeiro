import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Layout from "./components/Layout";


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
