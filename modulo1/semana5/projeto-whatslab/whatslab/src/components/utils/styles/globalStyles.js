import styled from "styled-components";


export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Input = styled.input`
    margin: 3px;    
    width: ${props => props.width};
    height: ${props => props.height};
    placeholder: ${props => props.placeholder};
`;