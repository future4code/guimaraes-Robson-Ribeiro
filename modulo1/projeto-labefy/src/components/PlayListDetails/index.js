import React from "react";

//components
import Button from "../Button";

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
    Pause
} from './styles';

class PlayListDetails extends React.Component{
    render(){
        return(<Container className="playlist-details-container">
            <PlayListCard>
                <CardInfo>
                    <CardPhoto>
                        <span>Foto</span>
                    </CardPhoto>

                    <CardDetails>
                        <Label>Musica: Dona Maria</Label>
                        <Label>Artista: Thiago Ventura</Label> 
                    </CardDetails>
                </CardInfo>

                <CardPlayInfo>
                    <CardPlay>
                        <Play onClick={this.props.handlePlaying}/>
                    </CardPlay>
                    <CardPlay>
                        <Pause onClick={this.props.handlePause} />
                    </CardPlay>
                </CardPlayInfo>
                
            </PlayListCard>
        </Container>
        )
    }
}

export default PlayListDetails;