import React, { useEffect, useState } from "react";

import Header from "../header";
import Footer from "../Footer";
import ChoosePerson from "../ChoosePerson";
import Matches from "../Matches";
import Loading from "../shared/loading";

import * as S from './styles'
import api from "../services/api";

const Layout = () =>{

    const [profile, setProfile] = useState({});
    const [isMatch, setIsMatch] = useState(false);
    const [isHide, setIsHide] = useState(true);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        getMatches();
        setIsMatch(false);
    },[]);

    useEffect(()=>{
        if(isMatch){
            getMatches();
            setIsMatch(false);
        }       
    },[isMatch]);

    const getMatches = () => {
        setLoading(false)
        api.astromatch.getProfileToChoose()
        .then((response) => { 
                setProfile(response.profile); 
                setLoading(true)
                })
        .catch((error) => { console.log("Error: ", error )});
    }

    const clearMatches =() =>{
        setLoading(false)
        api.astromatch.Clear()
        .then((response)=>{ setLoading(true)})
        .catch((error)=>{ console.log('error clear matches ', error)});
    }

    return(<S.Grid className="container-grid">
        <Header hide={isHide} setIsHide={setIsHide}/>
        { !isLoading? <Loading /> :  isHide &&  (<ChoosePerson profile={profile} />) }   
        { !isHide && <Matches matches={isHide} />}
        { isHide && <Footer profile={profile} setIsMatch={setIsMatch} getMatches={getMatches} clearMatches={clearMatches} /> }

     
    </S.Grid>)
}

export default Layout;