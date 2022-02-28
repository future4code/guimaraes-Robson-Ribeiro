import React from "react";
import { SiReactos } from 'react-icons/si';

//Components
import Input from '../Input/index';
import Button from '../Button/index';

//css
import { Container, Logo } from './styles';

class Header extends React.Component{
    render(){
        return(<>
            <Logo className="pl-logo">
                <SiReactos size={50}/>
            </Logo> 

            <Container className="layout-header">
                <Input className="header-input-playlist" placeholder="Informe aqui o nome da sua playlist" />
                <Button className="header-btn-salvar">Salvar</Button>
            </Container>
        </>)
    }
}

export default Header;