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