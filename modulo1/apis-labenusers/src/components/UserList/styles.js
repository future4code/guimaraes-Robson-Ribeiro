import styled from "styled-components";

import { Delete } from '@styled-icons/material';
import { IdCard } from '@styled-icons/boxicons-solid'

export const IconIdCard = styled(IdCard)`
    grid-area: IC;
    display: flex;
    margin: 0px;
    width: 25px;
    height: 25px;
`;

export const IconIdCardInfo = styled.div`
    grid-area: ID;
    display: flex;
    flex-direction: column;
    width: 80px;
`;

export const UserNameInfo = styled.div`
    grid-area: NM;
    display: flex;
    flex-direction: column;
    width: calc(100% - 160px );
`;

export const UserName = styled.span`
    grid-area: NM;
    display: flex;

`;

export const IconDelete = styled(Delete)`
    grid-area: IC;
    display: flex;
    flex-direction: column;
    width: 25px;
    height: 25px;
    color: blue;
    left: 10px;

    cursor: pointer;
    
    :hover{
        color: red;
    }
`;
export const IconDeleteInfo = styled.div`
    grid-area: IC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
`;

export const InfoUser = styled.div`
    grid-area: IC;
    display: flex;
    align-items: center;

    border: 1px solid black;
    border-radius: 0px;    

    width: 100%;

    margin: 5px 0px;
`;
