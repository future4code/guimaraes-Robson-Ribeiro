import styled from "styled-components";


//HE Header
//PL Playlist 
//PA Playlis Add
//PD PlayList Detalhe
//PP PlayList Play
//PC PlayList Cadastro
//LG Logo

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 200px 400px auto;
    grid-template-rows: 100px 200px 120px auto;

    grid-template-areas: 
    'LG HE HE'
    'PL PA PA'
    'PL PD PP'
    'PL PD PP'
    ;

    height: 100vh;
`;