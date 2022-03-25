import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    grid-area: IMG;

    /* border: 1px solid black; */
    height: 100%;
    min-width: calc(100% - 160px);
    /* border-radius: 10px; */

    box-shadow: 1px 1px 2px 5px rgba(228, 207, 207, 0.3);
    border-radius: 30px;

    overflow-y: auto;    
`;
