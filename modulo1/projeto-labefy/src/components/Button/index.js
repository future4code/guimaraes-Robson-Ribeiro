import React from "react";

import * as S from './styles';

class Button extends React.Component{
    render(){
        return (<S.Container className={`main-btn-${this.props.className}`} >
                    <S.Button className={this.props.className}>{this.props.children}</S.Button>
                </S.Container>
                )
    }
}

export default Button;