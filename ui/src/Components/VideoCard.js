import "./Stylesheets/VideoCard.css";
import { Button } from 'antd';
const VideoCard = (props) => (
    <div className="card">
        <p className="video-name">{props.name}</p>
        <Button size="middle" className="play-btn" type="primary" onClick={console.log("Video Link Transfer to Modal")}>VIEW</Button>
        <Button size="middle" className="edit-btn" type="primary" onClick={console.log("Deleted")}>EDIT</Button>
    </div>
);
export default VideoCard;
/*
    const response = await fetch(`http://localhost:8000/buckets/${props.id}`,{method: "GET"});
    const data = await response.json();
    let index = data.videos.length;
    const newData = {
      "video_id": index,
      "video_name":"new",
      "video_link":"new"
    }
    data.videos[index]=newData;
    const res = await fetch(`http://localhost:8000/buckets/${props.id}`, {
        method: 'PUT', mode: 'cors',credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    //console.log(res.json());
*/