import React from "react";

//components
import Button from "../Button";

//api
import api from "../../services/api";

//css
import { SpotifyContainer, SpotifySair, Playlist } from './styles';

class SpotifyPlaylist extends React.Component {
    
    componentDidMount(){
        this.props.getPlaylist();
    }

    render(){
        return(
            <SpotifyContainer className="spotify-container">
                
                <Playlist className="spotify-playlist">
                    <ul>
                        {this.props.spotifyPlaylist.map((playlist, index) => {
                            return <li key={playlist.id}>{playlist.name}</li>
                        })}
                    </ul>
                </Playlist>
                

            {/* <SpotifySair>
                <Button>Sair</Button>
            </SpotifySair> */}

            </SpotifyContainer>
        )
    }
}

export default  SpotifyPlaylist 