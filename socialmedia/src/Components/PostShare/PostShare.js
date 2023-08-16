import React,{useState,useRef} from "react";
import './PostShare.css'
import ProfileImage from '../../img/Profile.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
const PostShare=()=>{
    const [Image,setImage]=useState(null)
    const imageRef=useRef()
    const onImageChange=(event)=>{
        if (event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),
            })
        }
    }

    return(
        <div className="PostShare">
            <img src={ProfileImage} alt=""/>
            <div>
            <input type="text" placeholder="What's Happening"/>
        <div className="PostOptions">
                <div className="Options"
                style={{color:"#4CB256"}}
                onClick={()=>imageRef.current.click()}
                >
                    <UilScenery/>
                    Photo
                </div>
                <div className="Options"
                style={{color:"var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div>
                <div className="Options"
                style={{color:"var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div>
                <div className="Options"
                style={{color:"var(--shedule)"}}>
                    <UilSchedule/>
                    Schedule
                </div>
                <button className="button ps-button">Share</button>
                <div style={{display:"none"}}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>
            {Image && (

<div className="previewImage">
<UilTimes onClick={()=>setImage(null)}/>
<img src={Image.image} alt="" />
</div>

)}
            </div>
        
        </div>
        
    )
}

export default PostShare;