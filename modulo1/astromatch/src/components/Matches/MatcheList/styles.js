import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    /* border: 1px solid black; */

    height: 80px;
    width: calc(100% -6px);

    border-radius: 30px;
    /* box-shadow: 1px 1px 2px 5px rgba(228, 207, 207, 0.3); */
    box-shadow: 30px 30px 60px 5px #bebebe, -20px -20px 30px #ffffff;
    margin: 3px;

    align-items: center;

    :hover{
        background-color: rgb(208, 208, 208);
        cursor: pointer;
    }
`;

export const Photo = styled.div`
    display: flex;
    margin: 5px;

    width: 50px;
    height: 50px;

    /* border: 1px solid black; */

    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
        
        box-shadow: 1px 1px 2px 5px rgba(228, 207, 207, 0.3);
        border-radius: 500%;
    }
`;

export const Title = styled.div`
    display: flex;
    margin: 5px;
    /* border: 1px solid black; */

    align-items: center;
    padding: 5px;
    width: calc(100% - 100px);
`;