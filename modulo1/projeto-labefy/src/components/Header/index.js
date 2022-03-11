import React, { useState } from "react";
import { SiReactos, SiSpotify } from 'react-icons/si';
import { SpotifyAuth, Scopes } from "react-spotify-auth";
// import "react-spotify-auth/dist/index.css";

import Cookies from 'js-cookie'

//Components
import Input from '../Input/index';
import Button from '../Button/index';
import SpotifyPlaylist from "../SpotifyPlaylist/index";

//api
import api from "../../services/api";

//css
import { Container, Logo, StylesSpotify  } from './styles';


class Header extends React.Component{
    state = {
        token: Cookies.get("spotifyAuthToken"),
        isAuthentication: false,
        showSpotifyPlaylist: false,
        spotifyPlaylist: []
    }

    componentDidMount(){
        if(Cookies.get('spotifyAuthToken')){
            this.setState({ isAuthentication: true });

            // this.getCurrentUserPlaylists(Cookies.get('spotifyAuthToken'));
        }
    }

    getCurrentUserPlaylists = (token) => {
        api.spotify.getCurrentUserPlaylists(token)
        .then((res) => {
            this.addSpotifyPlaylist(res.items);
            console.log("Playlist: ", res.items)
        })
        .catch((error) => {
            console.log("playlist error: ", error.response)
        })
    }

    getCurrentUserProfile = (token) => {
        api.spotify.getCurrentUserProfile(token)
        .then( (res) => {
            this.spotifySetLocalStorage(res);
            console.log("Spotify profile: ", res );
        })
        .catch((error) => {
            console.log("Spotify profile error: ", error.response );
        })
    }

    spotifySetLocalStorage = ( data ) => {
        localStorage.setItem('display_name',data.display_name);
        localStorage.setItem('id',data.id);
        localStorage.setItem('email',data.email);
        localStorage.setItem('uri',data.uri);
    };

    showSpotifyPlaylist = ( show ) => this.setState({ showSpotifyPlaylist: show })

    addSpotifyPlaylist = ( data ) => this.setState({ spotifyPlaylist: data })

    handleAuthSpotify = (spotify) => {
        this.setState({ hasSpotifyAuth: spotify, token: Cookies.get('spotifyAuthToken') })
        console.log("Clicou me.....: ", this.state.hasSpotifyAuth);
    }

    render(){
        const { isAuthentication, showSpotifyPlaylist } = this.state

        const code = new URLSearchParams(window.location.search).get('access_token')

        console.log("code:", code);
        return(<>
            <Logo className="pl-logo">
                <SiReactos size={50}/>

                { isAuthentication && (
                    <SiSpotify className="spotify"
                        size={50} 
                        style={{ 
                            color: 'white', 
                            backgroundColor: '#1db954', 
                            borderRadius: '50%',
                        }}
                        title={'Clique aqui para importa sua playlist'}

                        onClick={() => this.showSpotifyPlaylist(true)}
                        //onMouseLeave={() => this.showSpotifyPlaylist(false)}
                        
                    />
                )}

                {showSpotifyPlaylist && (
                    <SpotifyPlaylist 
                        handleOnChangePlayListAdd={this.props.handleOnChangePlayListAdd}
                        handleCreatePlaylist={this.props.handleCreatePlaylist}
                        getPlaylist={() => this.getCurrentUserPlaylists(this.state.token)}
                        spotifyPlaylist={this.state.spotifyPlaylist}
                        showSpotifyPlaylist={this.showSpotifyPlaylist}

                    />
                )}
                
            </Logo> 

            <Container className="layout-header">
                <StylesSpotify onClick={() => this.handleAuthSpotify(true)}>
                    <SpotifyAuth
                        redirectUri={process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
                        clientID={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
                        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
                        title={'Continuar com Spotify'}
                    />
                </StylesSpotify >
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