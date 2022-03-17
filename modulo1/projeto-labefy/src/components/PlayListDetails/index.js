import React from "react";

//components
import Button from "../Button";
import MidiaPlayer from "../MidiaPlayer";

//css
import { 
    Container, 
    PlayListCard, 
    CardPhoto, 
    CardDetails, 
    CardPlay,
    CardPlayInfo,
    CardInfo,
    Label,
    Play,
    Pause,
    Delete
} from './styles';

class PlayListDetails extends React.Component{
    render(){
        return(<>
            <Container className="playlist-details-container">
                <PlayListCard>
                    <CardInfo>
                        {/* <CardPhoto>
                            <span>Foto</span>
                        </CardPhoto> */}

                        <CardDetails>
                            <Label>Musica: <p>{this.props.name} </p></Label>  
                            <Label>Artista: <p>{this.props.artista}</p> </Label>  
                        </CardDetails>
                    </CardInfo>

                    <CardPlayInfo>
                        <CardPlay>
                            <Play onClick={this.props.handlePlaying}/>
                        </CardPlay>
                        <CardPlay>
                            <Pause onClick={this.props.handlePause} />
                        </CardPlay>
                        <CardPlay>
                            <Delete onClick={this.props.handleRemoveTrackFormPlaylist} />
                        </CardPlay>
                        
                    </CardPlayInfo>
                    
                </PlayListCard>
            </Container>
        </>)
    }
}

export default PlayListDetails;