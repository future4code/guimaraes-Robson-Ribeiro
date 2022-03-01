import styled from "styled-components";
//icons
import { FaPlay } from 'react-icons/fa';
import { IoMdPause } from 'react-icons/io'

export const Container = styled.div`
    display: flex;
`;

export const PlayListCard = styled.div`
    display: flex;
    /* text-align: center; */
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;

    color: var(--Snow);
    background-color: var(--Black);

    margin: 2px 2px;
    border-radius: 5px;
`;

export const CardPhoto = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100px;
    height: 100px;

    border: 1px solid white;
    border-radius: 5px;

    margin: 5px 5px;
`;

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;

    width: 400px;
    height: 100px;

    border: 1px solid white;
    border-radius: 5px;
    margin: 5px 0px;

    padding-left: 10px;
`;

export const CardPlay = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    /* border: 1px solid yellow; */
    
`;

export const CardInfo = styled.div`
    display: flex;
    min-width: 400px;
`;

export const CardPlayInfo = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 5px 20px;
    width: 70px;
    /* border: 1px solid yellowgreen; */
`;

export const Label = styled.h4`
    display: flex;
`;

export const LabelInfo = styled.span`
    display: flex;
    /* position: absolute; */
`;

export const Play = styled(FaPlay)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    
    :hover{
        width: 35px;
        height: 35px;
    }
`;

export const Pause = styled(IoMdPause)`
    width: 30px;
    height: 30px;
    cursor: pointer;

    :hover{
        width: 35px;
        height: 35px;
    }

`;