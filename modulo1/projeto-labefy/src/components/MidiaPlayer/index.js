import React from "react";

//player
import ReactPlayer from "react-player/lazy"; 

//css
import { Container } from './styles';

class MidiaPlayer extends React.Component{
    render(){
        return(<Container>
            <ReactPlayer 
                url={'https://www.youtube.com/watch?v=qaPDDTLkB2U'} 
                width={'100%'}
                height={'100%'}
                playing={this.props.playPause}
            />
        </Container>)
    }
}

export default MidiaPlayer;