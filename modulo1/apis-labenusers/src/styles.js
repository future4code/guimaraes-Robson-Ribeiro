import styled from "styled-components";


export const Conatiner = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const FormCadastroUser = styled.div`
    display: flex;
    flex-direction: column;

    width: 70vh;
    height: 70vh;
    
    border: 2px solid black;
    border-radius: 5px;
    background-color: white;
`;

export const Info = styled.div`
    display: flex;
    text-align: center;
    align-items: center;

    margin: 20px auto 10px 20px;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;

    margin-left: 85px;

    :hover{
        cursor: pointer;
    }
`;

export const Label = styled.label`
    margin-right: 10px;;
    font-size: 20px;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;

    padding: 0px 0px 0px 10px;

    border: 1px solid black;
    border-radius: 5px;
`;

export const Separetor = styled.hr`
    width: auto;
    margin: 20px 30px;
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;

    text-align: center;
    align-items: center;
    
`;

//ID Icon Id, 
//NM Nome, 
//IC Icon Excluir
//UL Lista de Usuário
export const Grid = styled.div`
    border: 1px solid black;

    display: grid;

    grid-template-columns: 80px auto 80px;
    grid-template-rows: 46px;

    grid-template-areas: 
    'ID NM IC'
    'UL UL UL';
    
    margin: 0px 30px 20px 30px;
    border-radius: 5px;
    height: 100vh;
    
`;

export const TextColumnId = styled.h3`
    grid-area: ID;
    display: flex;
    text-align: center;
    align-items: center;

`;

export const TextColumnName = styled.h3`
    grid-area: NM;
    display: flex;
    text-align: center;
    align-items: center;
`;
export const TextColumnExcluir = styled.h3`
    grid-area: IC;
    display: flex;
    text-align: center;
    align-items: center;
`;

