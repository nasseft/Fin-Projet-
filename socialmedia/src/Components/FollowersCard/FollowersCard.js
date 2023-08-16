import React from 'react'
import './FollowersCard.css'
import {Followers} from '../../Data/FollowersData'
const FollowerCard=()=>{
    return(
        <div className="follower-card">
            <h4>Who Is Following You</h4>

            {Followers.map((follower,id)=>{
                return(
                    <div className='follower'>
                        <div>
                            <img src={follower.img} alt='' className='followerImage'/>
                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}


export default FollowerCard;