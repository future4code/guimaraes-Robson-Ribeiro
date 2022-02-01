import React from "react";


 class Button extends React.Component{

    render(){
        return(
            <button onClick={this.props.handleEnviar}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;