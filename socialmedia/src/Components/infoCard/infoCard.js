import React from "react";
import './InfoCard.css'


const InfoCard=()=>{
    return(
        <div className="infocard">
            <div className="infoHead">
                <h4>Your Info</h4>
                
            </div>

            <div className="info">
                <span>
                    <b>Status  </b>
                </span>
                <span>Single</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives In </b>
                </span>
                <span>Tunisia</span>
            </div>

            <div className="info">
                <span>
                    <b>Works As  </b>
                </span>
                <span>Web Developper</span>
            </div>

            <button className="button logout-button">LogOut</button>
        </div>
    )
}

export default InfoCard