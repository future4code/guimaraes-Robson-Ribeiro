import React from "react";

import { Photo } from './styles'


const Match = ({ profile }) => {

    return(<Photo photo={profile?.photo} >
            <img key={profile?.id} src={profile?.photo} />
    </Photo>);
}

export default Match;