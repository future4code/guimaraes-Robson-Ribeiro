import styled from "styled-components";

export const SpotifyContainer = styled.div`
    display: grid;

    grid-template-columns: 100%;
    grid-template-rows: 500px 100px;
    grid-template-areas: 'LI BT';


    position: absolute;
    /* justify-content: space-between; */
    width: 600px;
    height: 600px;

    border: 1px solid white;
    border-radius: 5px;
    background-color: var(--Black);

    left: 170px;
    right: 25%;
    top: 5%;
    bottom: 25%;


`;

export const SpotifySair = styled.div`
    display: flex;
    align-items: end;
    margin: 5px 5px;
    border: 2px solid yellow;
`;


export const Playlist = styled.div`
    display: flex;
`;