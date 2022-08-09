import "./Stylesheets/Bucket.css";
import { Button } from 'antd';
import Searchbar from "../Components/Searchbar";
import VideoCard from "../Components/VideoCard";

const Bucket = () => (
  <div className="bucket-outer">
    <div className="bucket-header">
      <p>BUCKET TITLE</p>
      <Searchbar/>
   </div>
    <div className="bucket-body">
      <VideoCard/> 
      <VideoCard/>
      </div>
    <div className="bucket-footer">  
      <Button size="middle" className="bucket-btn" type="primary" onClick={console.log("Add Modal")}>ADD</Button>
      <Button size="middle" className="bucket-btn" type="primary" onClick={console.log("Deleted")}>DELETE</Button>
      </div>
  </div>
);


export default Bucket;