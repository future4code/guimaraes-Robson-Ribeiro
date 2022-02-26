import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    html, body, #root{
        height: 100%;
        background-color: grey;
    }
`;

export default GlobalStyle;