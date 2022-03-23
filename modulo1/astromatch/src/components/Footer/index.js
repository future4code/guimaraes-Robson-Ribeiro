import React from "react";

import api from "../services/api";

import { Container, DisLike, Like } from './styles'

const Footer = ({ profile, setIsMatch }) => {

    const like = ( id, isMatch ) => {
        api.astromatch.ChoosePerson(id, isMatch)
        .then( (response)=> {    
            
            if(!response.isMatch){
                alert("Infelizmente você não deu match :( "); 
            }

            setIsMatch(true);
            
            
            console.log("Match:", response)
        })
        .catch( (error)=> { console.log("Match error:", error)})
    };

    return(<Container className="container-footer">   
        <DisLike  onClick={ () => like(profile?.id, false ) } />
        <Like onClick={ () => like(profile?.id, true) } />      
    </Container>)
}

export default Footer;