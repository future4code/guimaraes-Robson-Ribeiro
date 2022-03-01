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
                        {/* <Button width={'80px'} ><Play /></Button> */}
                        <Play />
                    </CardPlay>
                    <CardPlay>
                        {/* <Button width={'80px'}  ><Pause /></Button> */}
                        <Pause />
                    </CardPlay>
                </CardPlayInfo>
                
            </PlayListCard>
        </Container>
        )
    }
}

export default PlayListDetails;