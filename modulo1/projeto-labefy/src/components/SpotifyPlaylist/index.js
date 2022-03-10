import React from "react";

//components
import Button from "../Button";

//api
import api from "../../services/api";

//css
import { 
    SpotifyContainer, 
    Playlist, 
    PlaylistItem,
    CardPlayInfo,
    CardPlay,
    Add,
    Item,
    Sair
 } 
from './styles';

class SpotifyPlaylist extends React.Component {
    
    componentDidMount(){
        this.props.getPlaylist();
    }

    render(){
        return(<>
            <SpotifyContainer className="spotify-container">
                
                <Playlist className="spotify-playlist">
                        {this.props.spotifyPlaylist.map((playlist) => {
                            return (
                                <PlaylistItem key={playlist.id}>
                                    <Item>
                                        <h4 >{playlist.name}</h4>
                                    </Item>

                                    <CardPlayInfo>
                                        <CardPlay >
                                            <Add />
                                        </CardPlay>
                                    </CardPlayInfo>
                                </PlaylistItem>
                            ) 
                        })}
                </Playlist>
                        
                         
                
                <Sair><Button>Sair</Button></Sair>
            </SpotifyContainer>
                
            </>
        )
    }
}

export default  SpotifyPlaylist 