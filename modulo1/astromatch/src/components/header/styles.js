import styled from "styled-components";
import { FaUsers,FaUserCheck } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;

    grid-area: IC1;
`;

export const IconMetch = styled(FaUsers)`
    display: flex;
    font-size: 50px;

    visibility:  ${props => props.hide === true? 'hidden' : 'visible'};
`;

export const Title = styled.h1`
    display: flex;

    grid-area: TIT;
`;

export const IconAdd = styled(FaUserCheck)`
    display: flex;

    grid-area: IC2;

    font-size: 50px;
`;
