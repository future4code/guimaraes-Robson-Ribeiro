import styled from "styled-components";

export const ContainerPlayList = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: PL;

    background-color: var(--Black);
    max-height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const ContainerPlayListAdd = styled.div`
    display: flex;
    
    grid-area: PA;

    margin-bottom: 2px;
    border-bottom: 2px;
    border-color: var(--Snow);

    /* @media screen and (min-device-width : 1450px){
        text-align: start;
        align-items: flex-start;
        justify-content: flex-start;
    } */
`;

export const ContainerPlayListDetails = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: PD;

    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--grey11);

    /* margin-bottom: 2px;
    border-bottom: 2px;
    border-color: var(--Snow); */

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const ContainerPlayListPlay = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: PP;

    color: var(--Snow);
`;