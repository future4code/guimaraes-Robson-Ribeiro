import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    grid-area: ICO;

    width: 100%;

    justify-content: space-around;
    align-content: space-around;

    .replay {
    background: #fcfafa;
    box-shadow: 30px 30px 60px 5px #bebebe, -20px -20px 30px #ffffff;
    color: blue;
    }

    .close {
    background: #fcfafa;
    box-shadow: 20px 20px 30px #bebebe, -20px -20px 60px #ffffff;
    color: red;
    }

    .star {
    background: rgb(252, 247, 247);
    box-shadow: 20px 20px 30px #bebebe, -20px -20px 60px #ffffff;
    color: green;
    }

    .fav {
    background: rgb(252, 247, 247);
    box-shadow: 20px 20px 30px #bebebe, -20px -20px 60px #ffffff;
    color: rgb(240, 68, 96);
    }
    
    .flash {
    background: rgb(252, 247, 247);
    box-shadow: 20px 20px 30px #bebebe, -20px -20px 60px #ffffff;
    color: blueviolet;
    }
`;
