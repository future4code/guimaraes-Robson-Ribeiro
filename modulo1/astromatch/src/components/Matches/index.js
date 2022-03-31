import React, { useEffect, useState } from "react";

import MatcheList from "./MatcheList";
import api from "../services/api";
import { Container } from "./styles";

const Matches = ({ matches }) => {
    const [matche, setMatches] = useState([]);

    useEffect(()=>{
        if(!matches){
            api.astromatch.getMatches()
            .then((response)=> { setMatches(response.matches)})
            .catch((error)=>{console.log("match error:", error)});
        }
    },[]);

    return(<Container className="container-matches">
        {matche.map( (mat)=> 
            <MatcheList key={mat.id} photo={mat.photo} name={mat.name}/>
        )}
            
    </Container>)
}

export default Matches;