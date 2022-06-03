import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
    const navegate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToPage = (url) =>{
        navegate(url)
    }

    const signUp = () => {

        if(email === '' || password === '') return toast.error("É necessário informar os dados de acesso");
        api.labeX.signUp(email, password)
        .then(( response )=> {
            console.log("response: ",response.data)
            login(email, password);
        })
        .catch((error)=>{ 
            if(error.response.data.message === "Email já cadastrado"){
              login(email, password);                          
            }
        })
    }

    const login = (email, password) => {
        api.labeX.login(email, password)
        .then((response) => { 
            sessionStorage.setItem('Auth', response.token);
            sessionStorage.setItem('user', JSON.stringify(response.user));
            toast.success("Bem vindo de volta");    
            navegate('/admin/trips/list', { replace: true });  
         })
        .catch((error)=>{ 
            console.log("login error", error.response);
        });
    }

    
    return (
        <div className="container">    

            <h1>Login</h1>
                        
            {/* <div className="card"> */}
                <input type={'email'} placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
                <input type={'password'} placeholder='Senha' onChange={(event)=> setPassword(event.target.value)} />

                <div className="btn-info">
                    <button className="btn-styles" onClick={() => goToPage('/')}>Voltar</button>
                    <button className="btn-styles" onClick={() => signUp()}>Entrar</button>
                    <ToastContainer />;
                </div>
            {/* </div> */}
        </div>)
}

export default LoginPage;