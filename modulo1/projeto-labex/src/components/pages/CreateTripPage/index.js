import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {
    const navigate = useNavigate();

    const goToPage = (url) => {
        navigate(url)
    }

    return ( <div className="container">    
    <h1>Painel Administrativo</h1>

      <div className="card">
          <div className="info">
              <span>Descrição</span>
              <p> Icon </p>
          </div>
      </div>

      <div className="btn-info">
          <button className="btn-styles" onClick={() => goToPage('/admin/trips/list')}>Voltar</button>
          <button className="btn-styles" >Criar</button>
      </div>
  </div>)
}

export default CreateTripPage;