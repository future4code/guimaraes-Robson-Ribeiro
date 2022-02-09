import styled from "styled-components";

export const WhatsTyping = styled.div`
    min-height: 90vh;
    width: 90vh;
    margin-left: calc(100vh - 45vh);
    border: 1px solid black;
`;

export const Container = styled.div`
    text-align: center;
    item-align: center:
    display: ${props => props.display}; 
`;

export const WhatsContainer = styled.div`
    width: 90vh;
    margin-left: calc(100vh - 45vh);
    height: ${props => props.height};
`;


export const Photo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
`;


export const WhatsUserName = styled.strong`
    display: flex;
    margin-left: 120px;
`;

export const WhatsUserNameTyping = styled.span`
    display: flex;
`;