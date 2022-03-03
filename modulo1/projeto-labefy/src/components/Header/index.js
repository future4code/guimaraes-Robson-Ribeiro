import React from "react";
import { SiReactos } from 'react-icons/si';
import { SpotifyAuth, Scopes } from "react-spotify-auth";
// import "react-spotify-auth/dist/index.css";

//Components
import Input from '../Input/index';
import Button from '../Button/index';

//css
import { Container, Logo, StylesSpotify  } from './styles';

class Header extends React.Component{
    render(){
        return(<>
            <Logo className="pl-logo">
                <SiReactos size={50}/>
            </Logo> 

            <Container className="layout-header">
                <StylesSpotify>
                    <SpotifyAuth
                        redirectUri={process.env.REACT_APP_REDIRECT_URI}
                        clientID={process.env.REACT_APP_CLIENT_ID}
                        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
                        localStorage={true}
                        noCookie={false}
                        title={'Continuar com Spotify'}
                    />
                </StylesSpotify>
                <Input 
                    value={this.props.state.inputPlaylist}
                    className="header-input-playlist" 
                    placeholder="Informe aqui o nome da sua playlist" 
                    onChange={this.props.handleOnChangePlayListAdd}
                />
                <Button 
                    className="header-btn-salvar" 
                    onClick={this.props.handleCreatePlaylist}
                    >Salvar</Button>
            </Container>
        </>)
    }
}

export default Header;