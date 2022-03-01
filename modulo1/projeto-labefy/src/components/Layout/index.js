import React from "react";

//Components
import Header from '../Header/index';
import PlayList from "../PlayList";

//api
import api from "../../services/api";

//css
import { Grid } from './styles';

class Layout extends React.Component{

    state = {
        inputPlaylist: '',
        isUpdatePlayList: false
    }

    handleCreatePlaylist = () => {
        const { inputPlaylist } = this.state;
        console.log("body", this.state.inputPlaylist)
        api.createPlaylists(inputPlaylist)
        .then((response) => { 
            if(response.status === 200 || response.status === 201){
                this.setState({ inputPlaylist: '', isUpdatePlayList: true })
            }           
        })
        .catch((error) => {console.log("createplaylist erro: ", error ) });
    }

    handleOnChangePlayListAdd = (e) => this.setState({ inputPlaylist: e.target.value })

    handleUpdatePlayList = (isUpdate) => {
        this.setState({ isUpdatePlayList: isUpdate })
    }

    render(){
        return (
            <Grid className="layout">
                <Header 
                    state={this.state}
                    handleCreatePlaylist={this.handleCreatePlaylist}
                    handleOnChangePlayListAdd={this.handleOnChangePlayListAdd}
                />
                <PlayList 
                    handleUpdatePlayList={this.handleUpdatePlayList}
                    isUpdate={this.state.isUpdatePlayList}
                />
            </Grid>
        )
    }
}


export default Layout;