import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
    const navigate = useNavigate();

    const goToPage = (url) => {
        navigate(url)
    }

    return ( <div className="container">    
        <h1>Formulário de viagem</h1>

        <div className="card">
        
            <select >
                <option value={0}>Escolha uma Viagem</option>
                <option value={1}>Viagem 1</option>
            </select>

            <input type={'text'} placeholder='Nome' />
            <input type={'number'} placeholder='Idade' />
            <input type={'text'} placeholder='Texto de Candidatura' />
            <input type={'text'} placeholder='Profissão' />
            <select >
                <option value={0}>Escolha um País</option>
                <option value={1}>Brasil</option>
            </select>
        </div>

        <div className="btn-info">
            <button className="btn-styles" onClick={() => goToPage('/trips/list')}>Voltar</button>
            <button className="btn-styles" onClick={() => goToPage('/trips/application')}>Enviar</button>
        </div>

</div>)
}

export default ApplicationFormPage;