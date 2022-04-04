import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroud1 from '../../../img/backgroud1.jpg'
import backgroud2 from '../../../img/backgroud2.jpg'
import backgroud3 from '../../../img/backgroud3.jpg'
import backgroud4 from '../../../img/backgroud4.jpg'
import backgroud5 from '../../../img/backgroud5.jpg'
import backgroud6 from '../../../img/backgroud6.jpg'
import backgroud7 from '../../../img/backgroud7.jpg'
import backgroud8 from '../../../img/backgroud8.jpg'
import backgroud9 from '../../../img/backgroud9.jpg'

import './style.css';

const ListTripsPage = () => {
    const [backgroudRadom, setBackgroundRadom] = useState(
    [backgroud1, backgroud2, backgroud3, backgroud4,backgroud5, backgroud6, backgroud7, backgroud8, backgroud9]
    );
    
    const navegate = useNavigate();

    const goToPage = (url) =>{
        navegate(url)
    }

    useEffect(()=>{backgroudRandom(6)},[]);
    
    const backgroudRandom = (start) => {        
        document.body.style.backgroundImage =  `url('${backgroudRadom[start]}')`;
        document.body.style.position = 'center';
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover';
    }

    return(
    <div className="container">    
        <div className="btn-info">
            <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
            <button className="btn-styles" onClick={() => goToPage('/trips/application')}>Inscrever-se</button>
        </div>

        <h1>Lista de Viagens</h1>

        <div className="card">
           
            <div className="info">
                <span>Nome:</span>
                <p> Robson Rodrigues Ribeiro </p>
            </div>

            <div className="info">
                <span>Descrição:</span>
                <p> Iremos chamar a atenção dos planetas contra a classificação dos planetas anões </p>
            </div>

            <div className="info">
                <span>Planeta:</span>
                <p> Plutão</p>
            </div>

            <div className="info">
                <span>Duração:</span>
                <p> 100 </p>
            </div>

            <div className="info">
                <span>Data</span>
                <p> 14/02/1987 </p>
            </div>
        </div>
    </div>)
}

export default ListTripsPage;