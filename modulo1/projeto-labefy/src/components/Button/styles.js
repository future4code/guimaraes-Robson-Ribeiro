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
    width: 130px;

    border-radius: 500px;

    background-color: var(--Snow);
    color: var(--Black);

    :hover{
        width: 135px;
    }
`;