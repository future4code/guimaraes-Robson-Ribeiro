import React from "react";

import * as GS from '../utils/styles/globalStyles';

 class Button extends React.Component{
    render(){
        return(
            <GS.Button 
                onClick={this.props.onClick} 
                width={this.props.width} 
                height={this.props.height} >
                {this.props.children}
            </GS.Button>
        );
    }
}

export default Button;