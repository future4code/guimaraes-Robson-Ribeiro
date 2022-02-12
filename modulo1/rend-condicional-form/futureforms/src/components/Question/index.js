import React from 'react';

class Question extends React.Component{

    render(){   

        if(this.props.type === 'list' ){
            return(<>
            <h1> <b>{this.props.etapa}</b></h1>
            <label>{this.props.question}</label>
            <div>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>                        
                </select>
            </div>
            </>                
            )
        }else{
            if(this.props.type === 'curso'){
                return(<>
                 <h1> <b>{this.props.etapa}</b></h1>
                <label>{this.props.question}</label>
                <div>
                    <select>
                        <option>Nenhum</option>                      
                        <option>Curso Técnico</option>
                        <option>Curso de Inglês</option>                            
                    </select>
                </div>

            </>)
            }else{
                    return(<>
                        <h1> <b>{this.props.etapa}</b></h1>
                        <label>{this.props.question}</label>
                        <div><input type='text'/></div>    
                        </>)
                }
        }
        
    };
}

export default Question;