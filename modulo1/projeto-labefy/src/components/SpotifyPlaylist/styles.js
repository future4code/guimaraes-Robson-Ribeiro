import styled from "styled-components";

//icons
import { MdPlaylistAdd } from 'react-icons/md';


export const SpotifyContainer = styled.div`
    display: grid;
    flex-direction: column;

    grid-template-columns: 100%;
    grid-template-rows: 500px 100px;
    grid-template-areas: 'LI BT';


    position: absolute;
    /* justify-content: space-between; */
    width: 600px;
    height: 600px;

    border: 1px solid var(--Snow);
    border-radius: 5px;
    background-color: var(--Black);

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Playlist = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    grid-area: LI;
    
    
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        display: none;
    }

    border: 2px solid green;

`;

export const PlaylistItem = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    width: 95%;
    border: 1px solid var(--Snow);

    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;

    align-items: center;
    padding-left: 10px;

    border-radius: 5px;

    h4:hover{
        color: var(--MediumSpringGreen);
        cursor: pointer;
    }
`;

export const Item = styled.div`
    display: flex;
`;

export const CardPlayInfo = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 5px 5px;
    width: 50px;
    /* border: 1px solid yellowgreen; */
`;

export const CardPlay = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    /* border: 1px solid yellow; */
    
`;

export const Add = styled(MdPlaylistAdd)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    
    :hover{
        width: 35px;
        height: 35px;

        color: var(--MediumSpringGreen);
    }
`;

export const Sair = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: BT;

    justify-content: end;
    
    width: 100px;
    border: 1px solid yellow;
`;
