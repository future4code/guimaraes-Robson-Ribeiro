import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navegate = useNavigate();

    const goToPage = (url) =>{
        navegate(url)
    }


    return (
        <div className="container">    

            <h1>Login</h1>
                        
            {/* <div className="card"> */}
                <input type={'email'} placeholder='E-mail' />
                <input type={'password'} placeholder='Senha' />

                <div className="btn-info">
                    <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
                    <button className="btn-styles" onClick={() => goToPage('/admin/trips/list')}>Entrar</button>
                </div>
            {/* </div> */}
        </div>)
}

export default LoginPage;