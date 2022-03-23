import styled from "styled-components";

import { AiFillDislike, AiFillLike } from 'react-icons/ai'; 

export const Container = styled.div`
    display: flex;

    grid-area: ICO;

    width: 100%;

    justify-content: space-around;
    align-content: space-around;
`;

export const Like = styled(AiFillLike)`
    display: flex;

    font-size: 50px;

    :hover{
        color: blue;
        cursor: pointer;
    }
`;

export const DisLike = styled(AiFillDislike)`
    display: flex;

    font-size: 50px;

    :hover{
        color: red;
        cursor: pointer;
    }
`;