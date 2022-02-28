import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, input, button{
       border: 0;
       outline: 0;
    }

    :root{
        --DimGray: #696969; //cinza
        --Goldenrod: #DAA520; 
        --Black: #000000; //preto
        --Snow: #FFFAFA; //branco
        --grey11: rgb(12, 12, 12);
        --Red: #FF0000;
        --MediumSpringGreen: #00FA9A;
    }
`;