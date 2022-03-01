import React from "react";

//components
import PlayListInfo from "../PlayListInfo";
import PlayListAdd from "../PlayListAdd";
import PlayListDetails from "../PlayListDetails";
import MidiaPlayer from "../MidiaPlayer";

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
        playListSelectedId: '',
        playListSelected: ''
    }

    handlePlaying = () => this.setState({ isPlaying: true })

    handlePause = () => this.setState({ isPlaying: false })

    handlePlayList = ( idPlaylist, playlist ) => this.setState({ playListSelectedId: idPlaylist, playListSelected: playlist })

    handleOnChangeMusic = (e) => this.setState({ inputMusic: e.target.value })
    
    handleOnChangeArtista = (e) => this.setState({ inputArtista: e.target.value })
    
    handleOnChangeURL = (e) => this.setState({ inputURL: e.target.value })

    handleAddPlayList = () => {
        const { inputMusic, inputArtista, inputURL } = this.state;
        
        if(inputMusic != '' && inputArtista != '' && inputURL != ''){


            this.setState({ inputMusic: '', inputArtista: '', inputURL: '' });
            return  alert("PlayList CAD");
        }
    }

    render(){
        return(<>            
            <ContainerPlayList className="main-playlist-container">
                <PlayListInfo  
                    handlePlayList={this.handlePlayList} 
                    idPlaylist={'4715b37d-9268-45d0-b550-773843976dfa'}
                    playlist={'Pagode'} 
                />
                <PlayListInfo playlist={'Samba'} />
                <PlayListInfo playlist={'Regue'} />
                <PlayListInfo playlist={'Black'} />
                <PlayListInfo playlist={'Classica'} />
                <PlayListInfo playlist={'Romance'} />
            </ContainerPlayList>

            <ContainerPlayListAdd className="main-playlist-container-add">
                <PlayListAdd 
                    playlist={this.state.playListSelected} 
                    handleOnChangeMusic={this.handleOnChangeMusic}
                    handleOnChangeArtista={this.handleOnChangeArtista}
                    handleOnChangeURL={this.handleOnChangeURL}
                    state={this.state}
                    handleAddPlayList={this.handleAddPlayList}
                />
            </ContainerPlayListAdd>

            <ContainerPlayListDetails className="main-playlist-container-details">
                <PlayListDetails 
                    handlePlaying={this.handlePlaying} 
                    handlePause={this.handlePause}
                />
                <PlayListDetails />
                <PlayListDetails />                 
            </ContainerPlayListDetails>

            <ContainerPlayListPlay>
                <MidiaPlayer 
                    handlePlaying={this.handlePlaying} 
                    playPause={this.state.isPlaying} 
                />
            </ContainerPlayListPlay>

            

        </>)
    }
}

export default PlayList;