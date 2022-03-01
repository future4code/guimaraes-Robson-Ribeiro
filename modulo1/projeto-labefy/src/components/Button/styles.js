import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 40px;
    width: 135px;

    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    display: flex;

    text-align: center;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: ${ props => props.width? props.width : '130px'}; //130px;

    border-radius: ${ props => props.radius? props.radius : '500px'}; ;

    background-color: var(--Snow);
    color: var(--Black);

    font-size: 18px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;

    :hover{
        width: 135px;
    }
`;