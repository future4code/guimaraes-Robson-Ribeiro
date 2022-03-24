import React, { useEffect, useState } from "react";

import Header from "../header";
import Footer from "../Footer";
import ChoosePerson from "../ChoosePerson";
import Matches from "../Matches";

import * as S from './styles'
import api from "../services/api";

const Layout = () =>{

    const [profile, setProfile] = useState({});
    const [isMatch, setIsMatch] = useState(false);
    const [isHide, setIsHide] = useState(true);

    
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
        <Header hide={isHide} setIsHide={setIsHide}/>
        { isHide && (<ChoosePerson profile={profile} />) }   
        { !isHide && <Matches matches={isHide} />}
        { isHide && <Footer profile={profile} setIsMatch={setIsMatch}/> }
    </S.Grid>)
}

export default Layout;