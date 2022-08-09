import "./Stylesheets/Bucket.css";
import { Button } from 'antd';
import Searchbar from "../Components/Searchbar";
import VideoCard from "../Components/VideoCard";
import Modalbox from '../Components/Modalbox';

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
      <Modalbox />
      <Button size="middle" className="bucket-btn" type="primary" onClick={console.log("Deleted")}>DELETE</Button>
    </div>
  </div>
);


export default Bucket;