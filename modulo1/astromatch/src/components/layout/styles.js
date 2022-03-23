import styled from "styled-components";

export const Grid = styled.div`
    display: grid;

    height: 100vh;
    grid-template-columns: 80px 500px 80px;
    grid-template-rows: 80px 700px 80px;

    //IC1 Icon 1
    //TI  Title
    //IC2 Icon 2
    //DIS Dislike
    //ICO Nada
    //LIK Likes

    grid-template-areas: 
    'IC1 TIT IC2'
    'IMG IMG IMG'
    'DIS ICO LIK'
    ;


    /* border: 1px solid black; */


    justify-content: center;
    align-content: center;

    align-items: center;
    justify-items: center;
`;