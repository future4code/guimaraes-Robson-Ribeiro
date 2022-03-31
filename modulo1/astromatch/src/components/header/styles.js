import styled from "styled-components";
import { FaUsers,FaUserCheck } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;

    grid-area: TIT;

    top: 0px;
    justify-content: space-around;
    width: 100%;
    flex-direction: row;
    align-items: center;

    .header_left {
        background: rgb(252, 247, 247);
        box-shadow: 2px 0px 10px #bebebe, -20px -20px 60px #ffffff;
    }   

    /* .header_left {
        visibility:  ${props => props.hide? 'hidden' : 'visible'};
    } */
    .header_right {
        background: rgb(252, 247, 247);
        box-shadow: 2px 0px 10px #bebebe, -10px -10px 20px #ffffff;
    }

    /* .header_right{
        visibility:  ${props => !props.hide? 'hidden' : 'visible'}
    } */

    
`;

// export const IconMetch = styled(FaUsers)`
//     display: flex;
//     font-size: 50px;

//     visibility:  ${props => props.hide? 'hidden' : 'visible'};
// `;

// export const Title = styled.h1`
//     display: flex;

//     grid-area: TIT;
// `;

// export const IconAdd = styled(FaUserCheck)`
//     display: flex;

//     grid-area: IC2;

//     font-size: 50px;

//     visibility:  ${props => props.hide? 'hidden' : 'visible'};
// `;
