import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../services/api";

import './styles.css'
const CreateTripPage = () => {
    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [durationInDays, setDurationInDays] = useState();
    const navigate = useNavigate();
    
    const [planets, setPlanets] = useState( [
        { id: 1, value: 'Mercúrio' },
        { id: 2, value: 'Vênus' },
        { id: 3, value: 'Terra' },
        { id: 4, value: 'Marte' },
        { id: 5, value: 'Jupiter' },
        { id: 6, value: 'Saturno' },
        { id: 7, value: 'Urano' },
        { id: 8, value: 'Netuno' },
        { id: 9, value: 'Plutão' }
        ]
    )

    const goToPage = (url) => {
        navigate(url)
    }

    const saveTrip = () => {
        const data = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        console.log(data)
        if(name === ''  || planet === '' || date === '' || description === '' || durationInDays === 0){
         return toast.error('Para criar uma nova trip é necessário preencher todos os campos')
        }

        api.labeX.createTrip(data, sessionStorage.getItem('Auth'))
        .then((response)=> {console.log(response); toast.success("Trip criada")})
        .catch((error)=>{ toast.error(error.response.data.message) })

        clear();
    }

    const clear = () => {
        setName('');
        setPlanet('');
        setDate('');
        setDescription('');
        setDurationInDays('');
    }

    return ( <div className="container">    
    <h1>Criar viagem</h1>
        <ToastContainer />
        <div className="card-create-trip">
            <div className="info">
                <input type="text"  placeholder="Nome" value={name} onChange={(e) => setName(e.target.value) } />
                <select  value={planet} onChange={(e) => setPlanet(e.target.value) }>
                    <option >Escolha um Planeta</option>
                    {planets.map((planeta, index)=>{
                        return(
                            <>
                                <option key={planeta.id} value={planeta.value}>{planeta.value}</option>
                            </>
                        )
                    })}
                </select>
                <input type="date"  placeholder="" value={date} onChange={(e) => setDate(e.target.value) }/>
                <textarea  placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value) }></textarea>
                <input type="number"  placeholder=" Duração em dias" value={durationInDays} onChange={(e) => setDurationInDays(e.target.value) }/>
            </div>
        </div>

        <div className="btn-info">
            <button className="btn-styles" onClick={() => goToPage('/admin/trips/list')}>Voltar</button>
            <button className="btn-styles" onClick={() => saveTrip() }>Criar</button>
        </div>
  </div>)
}

export default CreateTripPage;