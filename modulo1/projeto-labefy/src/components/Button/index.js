import React from "react";

import * as S from './styles';

class Button extends React.Component{
    render(){
        return (<S.Container className={`main-btn-${this.props.className}`} >
                    <S.Button 
                        onClick={this.props.onClick}
                        className={this.props.className}
                        width={this.props.width} 
                        radius={this.props.radius}
                    >
                        {this.props.children}
                    </S.Button>
                </S.Container>
                )
    }
}

export default Button;