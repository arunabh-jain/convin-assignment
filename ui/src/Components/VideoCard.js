import "./Stylesheets/VideoCard.css";
import { Button } from 'antd';
const VideoCard = () => (
    <div className="card">
        <p className="video-name">VIDEO TITLE</p>
        <Button size="middle" className="play-btn" type="primary" onClick={console.log("Video Link Transfer to Modal")}>VIEW</Button>
        <Button size="middle" className="edit-btn" type="primary" onClick={console.log("Deleted")}>EDIT</Button>
    </div>
);
export default VideoCard;