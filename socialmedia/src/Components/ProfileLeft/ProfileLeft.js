import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import FollowerCard from "../FollowersCard/FollowersCard";
import InfoCard from "../infoCard/infoCard";



const ProfileLeft =()=>{ 
    return(
        <div className="ProfileSide">
            <LogoSearch/>
            <InfoCard/>
            <FollowerCard/>
        </div>
    )
}


export default ProfileLeft