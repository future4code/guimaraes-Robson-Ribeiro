import React from "react";


 class Input extends React.Component{

    render(){
        
        const mystyle = {
            width: this.props.width,
            height: this.props.height
          };


        return(
            <input type="text" 
                placeholder={this.props.placeholder} 
                style={mystyle}
            />
        );
    }
}

export default Input;