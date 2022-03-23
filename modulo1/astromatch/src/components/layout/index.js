import React, { useEffect, useState } from "react";

import Header from "../header";
import Footer from "../Footer";
import Match from "../Match";

import * as S from './styles'
import api from "../services/api";

const Layout = () =>{

    const [profile, setProfile] = useState({});
    const [isMatch, setIsMatch] = useState(false);
    
    useEffect(()=>{
        api.astromatch.getProfileToChoose()
        .then((response) => { setProfile(response.profile); console.log("Response: ", response.profile )} )
        .catch((error) => { console.log("Error: ", error )});
        setIsMatch(false);
    },[]);

    useEffect(()=>{
        if(isMatch){
            api.astromatch.getProfileToChoose()
            .then((response) => { setProfile(response.profile); console.log("Response: ", response.profile )} )
            .catch((error) => { console.log("Error: ", error )});
            setIsMatch(false);
        }       
    },[isMatch]);

    return(<S.Grid className="container-grid">
        <Header />
        <Match profile={profile} />
        <Footer profile={profile} setIsMatch={setIsMatch}/>
    </S.Grid>)
}

export default Layout;