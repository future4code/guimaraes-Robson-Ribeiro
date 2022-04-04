import { useNavigate } from "react-router-dom";

import "./styles.css";
import backgroud1 from '../../../img/backgroud1.jpg'
import backgroud2 from '../../../img/backgroud2.jpg'
import backgroud3 from '../../../img/backgroud3.jpg'
import { useEffect, useState } from "react";

const HomePage = () => {
    const navigate = useNavigate();
    const [backgroudRadom, setBackgroundRadom] = useState([backgroud1, backgroud2, backgroud3]);

    useEffect(()=>{backgroudRandom(1)},[]);

    const goTopPage = (url) => {
        navigate(url)
    }

    const backgroudRandom = (start) => {        
        document.body.style.backgroundImage =  `url('${backgroudRadom[start]}')`;
        document.body.style.position = 'center';
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover';
    }


    return (<div className="home-page-container" >
        <div className="home-info">
            <h1>Bem vindo(a) ao LabeX</h1>
            <button className="btn-styles" onClick={() => goTopPage('/trips/list')}>Lista de Viagens</button>
            <button className="btn-styles" onClick={() => goTopPage('/login')}>Área Adm</button>
        </div>
    </div>)
}

export default HomePage;