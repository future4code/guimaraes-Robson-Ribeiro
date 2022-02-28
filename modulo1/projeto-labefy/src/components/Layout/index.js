import React from "react";

//Components
import Header from '../Header/index';
import PlayList from "../PlayList";


//css
import { Grid } from './styles';

class Layout extends React.Component{
    render(){
        return (
            <Grid className="layout">
                <Header />
                <PlayList />
            </Grid>
        )
    }
}


export default Layout;