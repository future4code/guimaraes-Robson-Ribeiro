import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
    const navigate = useNavigate();

    const goToPage = (url) => {
        navigate(url)
    }

    return (
        <div className="container">    
          <h1>Painel Administrativo</h1>
            <div className="btn-info">
                <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
                <button className="btn-styles" onClick={() => goToPage('/admin/trips/create')}>Criar Viagem</button>
                <button className="btn-styles" onClick={() => goToPage('/trips/application')}>Logout</button>
            </div>
    
            <div className="card">
                <div className="info">
                    <span>Descrição</span>
                    <p> Icon </p>
                </div>
            </div>
        </div>)
}

export default AdminHomePage;