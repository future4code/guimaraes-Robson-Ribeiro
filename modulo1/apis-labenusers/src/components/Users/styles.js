import styled from "styled-components";

export const Container = styled.div`
    grid-area: UL;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px 0;

    max-height: 600px;

    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`;
