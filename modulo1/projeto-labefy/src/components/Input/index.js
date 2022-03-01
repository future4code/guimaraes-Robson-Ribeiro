import React from "react";

import * as S from './styles';

class Input extends React.Component{
    render(){
        return (<S.Container className={`main-input-${this.props.className}`}>
                    <S.Input 
                        value={this.props.value}
                        onChange={this.props.onChange}
                        className={this.props.className} 
                        placeholder={this.props.placeholder}
                    />
                </S.Container>
        )
    }
}

export default Input