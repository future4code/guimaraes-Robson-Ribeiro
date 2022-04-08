import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../services/api";

import './styles.css'

const AdminHomePage = () => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const [auth, setAuth] = useState(sessionStorage.getItem('Auth'));
    

    const goToPage = (url) => {
        navigate(url);
    }

    useEffect(() => {
        getTrips();
    },[]);


    const getTrips = () =>{
        api.labeX.getTrips()
        .then( response => setTrips(response.trips))
        .catch( error => console.log(error));
    }

    const deleteTrip = (idTripe) => {
        api.labeX.deleteTrip(idTripe, auth)
        .then( response => {
            getTrips();
            toast.success("Registro excluído")
        })
        .catch( error => toast.error("Não foi possível excluir o registro, tente novamente mais tarde"))
    }

    const SignOut = () => {
        sessionStorage.removeItem('Auth');
        sessionStorage.removeItem('user');
        goToPage('/')
    }

    return (
        <div className="container adm">    
          <h1>Painel Administrativo</h1>
            <div className="btn-info">
                <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
                <button className="btn-styles" onClick={() => goToPage('/admin/trips/create')}>Criar Viagem</button>
                <button className="btn-styles" onClick={() => SignOut()}>Logout</button>
            </div>
            <ToastContainer />
            {trips.map( (trip, index) => {
                return(
                <div className="card-admin" key={index}>
                    <div className="info">
                        <span>{trip.name}</span>
                        <button onClick={ (id) => deleteTrip(trip.id)} > X </button>
                    </div>
                </div>
                )
            })}            
        </div>)
}

export default AdminHomePage;