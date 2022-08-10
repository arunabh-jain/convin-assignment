import "./Stylesheets/VideoCard.css";
import { Button } from 'antd';
import Modalbox from '../Components/Modalbox';

const VideoCard = (props) => (
    <div className="card">
        <p className="video-name">{props.name}</p>
        <Button size="middle" className="play-btn" type="primary" onClick={console.log("Video Link Transfer to Modal")}>VIEW</Button>
        <Modalbox btnName="EDIT" videoId={props.id} bucketName={props.bucketName} bucketID={props.bucketID} videoName={props.name} videoLink={props.link}/>
    </div>
);
export default VideoCard;