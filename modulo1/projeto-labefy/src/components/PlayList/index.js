import React from "react";

//components
import PlayListInfo from "../PlayListInfo";
import PlayListAdd from "../PlayListAdd";
import PlayListDetails from "../PlayListDetails";
//css
import { 
    ContainerPlayList, 
    ContainerPlayListAdd,
    ContainerPlayListDetails
} from './styled';


class PlayList extends React.Component{
    render(){
        return(<>            
            <ContainerPlayList className="main-playlist-container">
                <PlayListInfo playlist={'Pagode'} />
                <PlayListInfo playlist={'Samba'} />
                <PlayListInfo playlist={'Regue'} />
                <PlayListInfo playlist={'Black'} />
                <PlayListInfo playlist={'Classica'} />
                <PlayListInfo playlist={'Romance'} />
            </ContainerPlayList>

            <ContainerPlayListAdd className="mai-playlist-container-add">
                <PlayListAdd />
            </ContainerPlayListAdd>

            <ContainerPlayListDetails>
                <PlayListDetails />
                <PlayListDetails />
                <PlayListDetails />                 
            </ContainerPlayListDetails>

            

        </>)
    }
}

export default PlayList;