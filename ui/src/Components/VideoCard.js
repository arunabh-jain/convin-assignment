import "./Stylesheets/VideoCard.css";
import { Checkbox } from 'antd';
import Modalbox from '../Components/Modalbox';
import React from 'react';
import VideoFrame from './VideoFrame';

const VideoCard = (props) => {

    const onChange = (e) => {
        if(e.target.checked){
            props.addElementsToDelete(props.id)
        }
        else{
            props.removeElementsToDelete(props.id)
        }
    };

    const saveHistory = async() =>{
        let date = new Date();
        let data = {
            "bucket_id": props.bucketID,
            "bucket_title": props.bucketName,
            "video_id": props.id,
            "video_name": props.name,
            "video_link":props.link,
            "last_played": date.toLocaleTimeString()+" "+date.toLocaleDateString() 
        }
        await fetch(`/history/`, {
            method: 'POST', mode: 'cors',credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    };

    return(
            <div className="card">
                    <Checkbox className="check-box" onChange={onChange}/>
                    <p className="video-name">{props.name}</p>
                    <VideoFrame link = {props.link} onClick={saveHistory}/>
                    <Modalbox btnName="EDIT" setData={props.setData} videoId={props.id} bucketName={props.bucketName} bucketID={props.bucketID} videoName={props.name} videoLink={props.link} deleteElementsToDelete={props.deleteElementsToDelete}/>
            </div>
    )
};

export default VideoCard;