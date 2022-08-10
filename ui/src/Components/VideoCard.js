import "./Stylesheets/VideoCard.css";
import { Button, Checkbox } from 'antd';
import Modalbox from '../Components/Modalbox';
import React from 'react';


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
        const data = {
            "bucket_id": props.bucketID,
            "bucket_title": props.bucketName,
            "video_id": props.id,
            "video_name": props.name,
            "video_link":props.link,
            "last_played": new Date()
        }
        await fetch(`http://localhost:8000/history/`, {
            method: 'POST', mode: 'cors',credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }

    return(
        <div className="card">
            <div className="checkbox-div">
            <Checkbox className="check-box" onChange={onChange}/>
            </div>
            <p className="video-name">{props.name}</p>
            <Button size="middle" className="play-btn" type="primary" onClick={saveHistory}>VIEW</Button>
            <Modalbox btnName="EDIT" setData={props.setData} videoId={props.id} bucketName={props.bucketName} bucketID={props.bucketID} videoName={props.name} videoLink={props.link} deleteElementsToDelete={props.deleteElementsToDelete}/>
        </div>
    )
};
export default VideoCard;