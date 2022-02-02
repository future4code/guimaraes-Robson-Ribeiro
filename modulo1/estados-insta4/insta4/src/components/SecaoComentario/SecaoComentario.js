import React, {Component } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
	color: black;
`

const SecaoComentario = (props) => {
	
	const [comentario, setComentario] = useState('');

	const onChangeComentario = (event) => {
		 console.log("Secao", event.target.value);
		 setComentario(event.target.value);
	}

	return <CommentContainer>
		<InputComentario
			placeholder={'Comentário'}
			value={comentario}
			onChange={onChangeComentario}
		/>
		<button onClick={props.aoEnviar}>Enviar</button>
	</CommentContainer>	
}

export default SecaoComentario;
