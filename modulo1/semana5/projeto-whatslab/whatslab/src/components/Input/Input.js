import React from "react";

import * as GS from '../utils/styles/globalStyles';

 class Input extends React.Component{
    render(){
        return(
            <GS.Input type="text" 
                placeholder={this.props.placeholder} 
                width={this.props.width}
                height={this.props.height}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Input;