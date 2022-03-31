import React from "react";

import api from "../services/api";

import { Container, DisLike, Like } from './styles'

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";


const Footer = ({ profile, setIsMatch, getMatches, clearMatches }) => {

    const like = ( id, isMatch ) => {
        api.astromatch.ChoosePerson(id, isMatch)
        .then( (response)=> {    
            
            if(!response.isMatch){
                alert("Infelizmente você não deu match :( "); 
            }
            setIsMatch(true);
        })
        .catch( (error)=> { console.log("Match error:", error)})
    };

    return(<Container className="container-footer">   
        <IconButton className="replay" onClick={()=> clearMatches() }>
            <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="close" onClick={ () => getMatches() }  >
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="star">
            <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="fav" onClick={ () => like(profile?.id, true) }>
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="flash">
            <FlashOnIcon fontSize="large" />
        </IconButton>

        {/* <DisLike  onClick={ () => getMatches() } />
        <Like onClick={ () => like(profile?.id, true) } />       */}
    </Container>)
}

export default Footer;