import React from "react";
import './LogoSearch.css';
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch=()=>{
    return(
        <div className="logo-search">
            <img src={Logo}alt="" />
            <div className="Search">
                <input type="text " placeholder="#Explore"/>
            </div>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    )
}

export default LogoSearch ; 