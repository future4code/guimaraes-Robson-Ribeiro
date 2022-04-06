import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../services/api";

const AdminHomePage = () => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);

    const goToPage = (url) => {
        navigate(url);
    }

    useEffect(() => {
        api.labeX.getTrips()
        .then( response => setTrips(response.trips))
        .catch( error => console.log(error));
    },[]);

    return (
        <div className="container">    
          <h1>Painel Administrativo</h1>
            <div className="btn-info">
                <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
                <button className="btn-styles" onClick={() => goToPage('/admin/trips/create')}>Criar Viagem</button>
                <button className="btn-styles" onClick={() => goToPage('/trips/application')}>Logout</button>
            </div>

            {trips.map( (trip, index) => {
                return(
                <div className="card">
                    <div className="info">
                        <span>{trip.name}</span>
                    </div>
                </div>
                )
            })}
            
        </div>)
}

export default AdminHomePage;