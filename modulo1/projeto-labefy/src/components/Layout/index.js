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
        isUpdatePlayList: false,
        playlist: []
    }

    handleCreatePlaylist = () => {
        const { inputPlaylist } = this.state;
        // console.log("layout createplaylist: ", this.state.inputPlaylist);

        if( inputPlaylist === '' ) return alert("É necessário informar o nome da playlist")
        api.createPlaylists(inputPlaylist)
        .then((data) => { 
            // console.log("data:", data)
            if(data.status === 200 || data.status === 201){
                this.setState({ inputPlaylist: '', isUpdatePlayList: true })
                this.getAllPlaylists();
            } 
        })
        .catch((erro) => {
            // console.log("Component layout: ", erro.response )
            if(erro.response.status === 400 ){
                return alert("Playlist já cadastrada")
            }

            return alert("Status code não tratado:"+erro.response.status)
            });
    }

    handleOnChangePlayListAdd = (e) => this.setState({ inputPlaylist: e.target.value })

    handleUpdatePlayList = (playlistUpdate) => {
        this.setState({ playlist: playlistUpdate })
    }

    getAllPlaylists = () => {
        api.getAllPlaylists()
        .then((response) => {
            console.log("layout: ",response)
            this.setState({ playlist: response.result.list }) 
        })
        .catch((error) => {return error } ) 
    }

    componentDidMount(){
        this.getAllPlaylists();
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
                    playlist={this.state.playlist}
                />
            </Grid>
        )
    }
}


export default Layout;