import "./Stylesheets/Bucket.css";
import { Button } from 'antd';
import Searchbar from "../Components/Searchbar";
import VideoCard from "../Components/VideoCard";
import Modalbox from '../Components/Modalbox';

const Bucket = (props) => (
  
  <div className="bucket-outer">
    <div className="bucket-header">
      <p>{props.title}</p>
      <Searchbar/>
   </div>
    <div className="bucket-body">
      {     
        props.videos.map((data)=>{
          return(<VideoCard key={data.video_id} id={data.id} name={data.video_name} link={data.video_link}/>)
        })
        
      }
      </div>
    <div className="bucket-footer">  
      <Modalbox id={props.id}/>
      <Button size="middle" className="bucket-btn" type="primary" onClick={console.log("Deleted")}>DELETE</Button>
    </div>
  </div>
);


export default Bucket;