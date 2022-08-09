import "./Stylesheets/VideoCard.css";
import { Button } from 'antd';
import Modalbox from '../Components/Modalbox';

const VideoCard = () => (
    <div className="card">
        <p className="video-name">VIDEO TITLE</p>
        <Button size="middle" className="play-btn" type="primary" onClick={console.log("Video Link Transfer to Modal")}>VIEW</Button>
        <Modalbox/>
    </div>
);
export default VideoCard;