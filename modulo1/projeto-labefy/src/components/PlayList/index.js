import React from "react";

//components
import PlayListInfo from "../PlayListInfo";
import PlayListAdd from "../PlayListAdd";
import PlayListDetails from "../PlayListDetails";
import PlayListPlay from "../PlayListPlay";

//css
import { 
    ContainerPlayList, 
    ContainerPlayListAdd,
    ContainerPlayListDetails,
    ContainerPlayListPlay
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

            <ContainerPlayListAdd className="main-playlist-container-add">
                <PlayListAdd />
            </ContainerPlayListAdd>

            <ContainerPlayListDetails className="main-playlist-container-details">
                <PlayListDetails />
                <PlayListDetails />
                <PlayListDetails />                 
            </ContainerPlayListDetails>

            <ContainerPlayListPlay>
                <PlayListPlay />
            </ContainerPlayListPlay>

            

        </>)
    }
}

export default PlayList;