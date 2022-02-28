import React from "react";

//components
import Button from '../Button/index';
import Input from '../Input/index';

//css
import { 
    Container, 
    PlayListInfo, 
    PlayListInfoAdd, 
    PlayListInfoData, 
    PlaylisInfoContainer,
    IconInfo,
    IconAdd
} from './styles';


class PlayListAdd extends React.Component{
    render(){
        return(<Container>
                
            <PlaylisInfoContainer>
            <PlayListInfo>
                <span>Playlist: Pagode</span>
                <PlayListInfoData>
                    <label>Nome: </label>
                    <Input />
                </PlayListInfoData> 
                <PlayListInfoData>
                    <label>Artista: </label>
                    <Input />
                </PlayListInfoData>
                <PlayListInfoData>
                    <label>URL: </label>
                    <Input />
                </PlayListInfoData>
            </PlayListInfo>
            </PlaylisInfoContainer>
        
            <PlayListInfoAdd>
                <Button>
                    <IconInfo>     
                        Salvar                   
                        {/* <IconAdd /> */}
                    </IconInfo>

                </Button>
            </PlayListInfoAdd>
        </Container>)
    }
}

export default PlayListAdd;