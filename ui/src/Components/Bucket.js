import "./Stylesheets/Bucket.css";
import { useEffect, useState } from "react";
import { Button } from 'antd';
import Searchbar from "../Components/Searchbar";
import VideoCard from "../Components/VideoCard";
import Modalbox from '../Components/Modalbox';

const Bucket = (props) => {
  const [videoData,setVideoData] = useState([]);
  useEffect(() => {setVideoData(props.videos);}, [props.videos]);
  
  return (
  <div className="bucket-outer">
    <div className="bucket-header">
      <p>{props.title}</p>
      <Searchbar/>
   </div>
    <div className="bucket-body">
      {     
        videoData.map((data)=>{
          return(<VideoCard key={data.video_id} setData={props.setData} id={data.video_id} name={data.video_name} link={data.video_link} bucketID={props.id} bucketName={props.title}/>)
        })
      }
      </div>
    <div className="bucket-footer">  
      <Modalbox id={props.id} setData={props.setData} btnName="ADD"/>
      <Button size="middle" className="bucket-btn" type="primary" onClick={console.log("Deleted")}>DELETE</Button>
    </div>
  </div>
)};


export default Bucket;