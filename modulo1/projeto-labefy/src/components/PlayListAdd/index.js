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
                <span>{this.props.playlist? this.props.playlist : 'Selecionar uma playlist'}</span>
                <PlayListInfoData>
                    <label>Musica: </label>
                    <Input 
                        value={this.props.state.inputMusic}
                        onChange={this.props.handleOnChangeMusic}
                    />
                </PlayListInfoData> 
                <PlayListInfoData>
                    <label>Artista: </label>
                    <Input 
                        value={this.props.state.inputArtista}
                        onChange={this.props.handleOnChangeArtista}
                    />
                </PlayListInfoData>
                <PlayListInfoData>
                    <label>URL: </label>
                    <Input 
                        value={this.props.state.inputURL}
                        onChange={this.props.handleOnChangeURL}
                    />
                </PlayListInfoData>
            </PlayListInfo>
            </PlaylisInfoContainer>
        
            <PlayListInfoAdd>
                <Button onClick={this.props.handleAddPlayList}>
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