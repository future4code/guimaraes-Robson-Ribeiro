import styled from "styled-components";

//icons
import { BiListPlus } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

export const Container = styled.div`
    display: flex;

    min-height: 50px;
    width: 200px;

    text-align: center;
    align-items: center;
    justify-content: space-between;

    margin: 5px 0px;
`;

export const List = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin: 0px 10px;
    span{
        color: white;
    }
`;

export const ListTitle = styled.span`
    display: flex;
    color: white;

    cursor: pointer;
    
    :hover{
        color: var(--MediumSpringGreen);
    }
`;

export const Icons = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin: 0px 10px;
`;

export const IconAdd = styled(BiListPlus)`
    color: var(--Snow);
    width: 20px;
    height: 20px;
    cursor: pointer;

    :hover{
        color: var(--MediumSpringGreen);
    }
`;

export const IconDelete = styled(MdDelete)`
    color: var(--Snow);
    width: 20px;
    height: 20px;
    cursor: pointer;

    :hover{
        color: var(--Red)
    }
`;

export const PlayListIcon = styled(BsFillFileEarmarkMusicFill)`
    display: flex;
    width: 20px;
    height: 20px;
    color: var(--Snow);

    margin-right: 5px;
`;

export const PlayListData = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

`;