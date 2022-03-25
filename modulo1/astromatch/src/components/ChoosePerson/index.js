import React from "react";

import { Photo } from './styles'


const ChoosePerson = ({ profile }) => {

    return(<Photo photo={profile?.photo} className="choose-person">
            <img key={profile?.id} src={profile?.photo} />
            <div className="match-info">
                <div className="match-background">
                    <div className="info-users">                
                        <h3>
                            {profile?.name?.toUpperCase()}
                            {', '+profile.age}
                        </h3>
                    </div>

                    <div className="info-bio">
                        <span>{profile.bio}</span>
                    </div>
                </div>
                
            </div>
            
    </Photo>);
}

export default ChoosePerson;