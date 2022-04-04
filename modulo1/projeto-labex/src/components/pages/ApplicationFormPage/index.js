import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/loginpage")
    }

    return (<div>
        <a href="/" onClick={goToLoginPage}>
            Home
        </a>
    </div>)
}

export default ApplicationFormPage;