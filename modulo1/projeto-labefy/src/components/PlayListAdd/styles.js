import styled from "styled-components";

import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: var(--grey11);

 
    /* border: 2px solid white; */
`;

export const PlayListInfo = styled.div`
    display: flex; 
    flex-direction: column;
    color: var(--Snow);

    margin: 10px 0px;
`;

export const PlayListInfoAdd = styled.div`
    display: flex;
    text-align: center;
    align-items:flex-end;
    justify-content:  center;

    margin-right: 20px;
    margin-bottom: 15px;
 
`;

export const PlaylisInfoContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin-left: 5px;
`;

export const PlayListInfoData = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    margin: 5px 10px;
`;

export const IconAdd = styled(BsFillFileEarmarkMusicFill)`
    display: flex;
    width: 25px;
    height: 25px;
`;

export const IconInfo = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
`;