import React from "react";

//player
import ReactPlayer from "react-player/lazy"; 

//css
import { Container } from './styles';

class MidiaPlayer extends React.Component{
    render(){
        return(<Container>
            <ReactPlayer 
                url={this.props.url} 
                width={'100%'}
                height={'100%'}
                playing={this.props.playPause}
            />
        </Container>)
    }
}

export default MidiaPlayer;