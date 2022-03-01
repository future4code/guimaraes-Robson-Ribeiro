import React from "react";

import { 
    Container, 
    List, 
    Icons, 
    IconAdd, 
    IconDelete, 
    ListTitle,
    PlayListIcon,
    PlayListData
} from './styles';

//Icons


class PlayListInfo extends React.Component{
    render(){
        return(<Container className="main-playlist-info-container">
                <List className={`main-playlist-info-container-category`}>
                    <PlayListData className="category-playlistdata">
                        <PlayListIcon />
                        <ListTitle onClick={() => this.props.handlePlayList(this.props.idPlaylist, this.props?.playlist)}
                            className={`main-playlist-info-container-category-${this.props?.playlist}`}
                        >   {this.props.playlist}
                        </ListTitle> 
                     </PlayListData>
                </List>
                <Icons>
                    <IconAdd />
                    <IconDelete />
                </Icons>
        </Container>)
    }
}

export default PlayListInfo;