import React from "react";

//components
import PlayListInfo from "../PlayListInfo";
import PlayListAdd from "../PlayListAdd";
import PlayListDetails from "../PlayListDetails";
import MidiaPlayer from "../MidiaPlayer";

//api
import api from "../../services/api";
//css
import { 
    ContainerPlayList, 
    ContainerPlayListAdd,
    ContainerPlayListDetails,
    ContainerPlayListPlay
} from './styled';


class PlayList extends React.Component{
    state = {
        isPlaying: false,
        inputMusic: '',
        inputArtista: '',
        inputURL: '',
        playlistSelectedId: '',
        playlistSelected: '',
        playlist: [],
        playlistTracks: [],
        inputPlaylist: '',
        urlPlaying: '',
        isUpdatePlayList: this.props.isUpdate,
    }
    
    componentDidMount(){
        this.getAllPlaylists();
    }

    handlePlayingPause = (isPlaying, url ) => {
        this.setState({ isPlaying: isPlaying, urlPlaying: url })
    } 
    
    handlePlayList = ( idPlaylist, playlist ) => {
        this.setState({ playlistSelectedId: idPlaylist, playlistSelected: playlist })
        this.handlePLaylistTracks(idPlaylist);
    }

    handleOnChangeMusic = (e) => this.setState({ inputMusic: e.target.value })
    
    handleOnChangeArtista = (e) => this.setState({ inputArtista: e.target.value })
    
    handleOnChangeURL = (e) => this.setState({ inputURL: e.target.value })

    handleAddPlayList = ( idPlalistTrack ) => {
        const { inputMusic, inputArtista, inputURL } = this.state;
        
        if(idPlalistTrack === '') return alert("É necessário selecionar uma playlist");

        if(inputMusic != '' && inputArtista != '' && inputURL != ''){
            api.addTrackToPlaylist(inputMusic, inputArtista, inputURL, idPlalistTrack  )
            .then((response) => {
                this.handlePLaylistTracks(idPlalistTrack);
            })
            .catch((error) => { console.log("track add error: ", error )})

            this.setState({ inputMusic: '', inputArtista: '', inputURL: '' });
        }

        if(inputMusic === '' || inputArtista === '' || inputURL === '') return alert("É necessário informar os dados da playlist")
    }

    handleDeletePlayList = (idPlaylist) => {
        api.deletePlaylist(idPlaylist)
        .then((response) => {
            if(response.status === 200 || response.status === 201){
                this.props.handleUpdatePlayList(true);
            }            
        })
        .catch((error) =>console.log("delete error:", error));
    }

    handlePLaylistTracks = (idPlaylist) => {
        if(idPlaylist != ''){
            api.getPlayListTracks(idPlaylist)
            .then((response) => {
                this.setState({ playlistTracks: response.result.tracks })
            })
            .catch((error) => { console.log("GetPlayTracks error: ", error ) });
        }
    }

    handleRemoveTrackFormPlaylist = ( idPlaylist, idTrackFormPlaylist ) => {
        api.removeTrackFromPlaylist(idPlaylist, idTrackFormPlaylist)
        .then((response) => { 
            this.handlePLaylistTracks(this.state.playlistSelectedId);
        })
        .catch((error) => { console.log("remove track error: ", error )});
    }

    getAllPlaylists = () => {
        api.getAllPlaylists()
        .then((response) => {
            this.setState({ playlist: response.result.list }) 
        })
        .catch((error) => {return error } ) 
    }

    render(){
        const isUpdate = this.props.isUpdate;
        if(isUpdate === true){
            this.getAllPlaylists();
        }

        return(<>            
            <ContainerPlayList className="main-playlist-container">
                { this.state.playlist.map((list, index) => {
                    return   <PlayListInfo  key={index}
                    handlePlayList={this.handlePlayList} 
                    handleDeletePlayList={this.handleDeletePlayList}
                    idPlaylist={list.id}
                    playlist={list.name} 
                />
                })}
            </ContainerPlayList>

            <ContainerPlayListAdd className="main-playlist-container-add">
                <PlayListAdd 
                    playlist={this.state.playlistSelected} 
                    handleOnChangeMusic={this.handleOnChangeMusic}
                    handleOnChangeArtista={this.handleOnChangeArtista}
                    handleOnChangeURL={this.handleOnChangeURL}
                    state={this.state}
                    handleAddPlayList={() => this.handleAddPlayList(this.state.playlistSelectedId)}
                />
            </ContainerPlayListAdd>

            <ContainerPlayListDetails className="main-playlist-container-details">
                {this.state.playlistTracks.map((track, index) => {
                    return <PlayListDetails key={index}
                                handlePlaying={() => this.handlePlayingPause(true, track.url)} 
                                handlePause={() => this.handlePlayingPause(false, track.url)}
                                playPause={this.state.isPlaying} 
                                idPlaylist={this.state.playlistSelected}
                                name={track.name}
                                artista={track.artist}
                                idPlalistTrack={track.id}
                                handleRemoveTrackFormPlaylist={() => this.handleRemoveTrackFormPlaylist(this.state.playlistSelectedId, track.id)}
                            />
                })}
            </ContainerPlayListDetails>
            
            
            <ContainerPlayListPlay>
                <MidiaPlayer 
                    playPause={this.state.isPlaying} 
                    url={this.state.urlPlaying}
                />
            </ContainerPlayListPlay>

        </>)
    }
}

export default PlayList;