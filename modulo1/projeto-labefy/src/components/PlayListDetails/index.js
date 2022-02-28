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
    LabelInfo
} from './styles';

class PlayListDetails extends React.Component{
    render(){
        return(<Container>
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
                        <Button>play</Button>
                    </CardPlay>
                    <CardPlay>
                        <Button>Pause</Button>
                    </CardPlay>
                </CardPlayInfo>
                
            </PlayListCard>
        </Container>
        )
    }
}

export default PlayListDetails;