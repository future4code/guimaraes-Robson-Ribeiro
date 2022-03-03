import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    grid-area: HE;

    //all element in the header in the center
    text-align: center;
    align-items: center;
    justify-content: center;

    background-color: var(--Black);
`;

export const Logo = styled.div`
    grid-area: LG;
    display: flex;
    width: 200px;
    height: 100px;
    background-color: var(--Black);
    text-align: center;
    align-items: center;
    justify-content: center;

    color: white;
`;

export const StylesSpotify = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap'); 
        margin: 0px 5px;

    ._3xrlJ {
        transition-duration: 300ms;
        font-family: 'Rubik', Arial, Helvetica, sans-serif;
        background-color: #1db954;
        color: #fff;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 32px;
        border: none;
        border-radius: 5px;
    }

    ._3xrlJ:hover, ._3xrlJ:focus {
        transition-duration: 500ms;
        transform: translate(-1px, 2px);
        box-shadow: 0 0.25rem 0.75rem 0 #777777;
    }

    ._1JCP_ {
        /* Convert spotify logo to white */
        padding: 0.25rem 0.5rem;
        height: 1.5rem;
        fill: #fff;
        width:2em;
    }

    border-radius: 0.2rem;
`;