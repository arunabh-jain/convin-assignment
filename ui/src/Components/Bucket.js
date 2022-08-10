import "./Stylesheets/Bucket.css";
import { useEffect, useState } from "react";
import { Button } from 'antd';
import Searchbar from "../Components/Searchbar";
import VideoCard from "../Components/VideoCard";
import Modalbox from '../Components/Modalbox';

const Bucket = (props) => {
  const[elementsToDelete, setElementsToDelete] = useState([])
  const [videoData,setVideoData] = useState([]);
  const [displayVideoData,setDisplayVideoData] = useState([]);

  function GetSortOrder() {    
    return function(a, b) {   
        if (a.video_name > b.video_name) {    
            return 1;    
        } else if (a.video_name < b.video_name) {    
            return -1;    
        }    
        return 0;    
    }    
  }   
  useEffect(() => {setVideoData(props.videos.sort(GetSortOrder()));}, [props.videos]);
  useEffect(() => {setDisplayVideoData(videoData);}, [videoData]);
  const addElementsToDelete = (videoID) => {
    setElementsToDelete(oldArray => [...oldArray, videoID])
  }

  const onSearchClear = (value) => {
    setDisplayVideoData(videoData);
  }

  const setSearch = (value) => {
    console.log(value);
    if(value==='')
      setDisplayVideoData(videoData);
    else
      setDisplayVideoData( displayVideoData.filter((record)=>{
        return record.video_name.includes(value)
      }))
  }

  const deleteElementsToDelete = () => {
    setElementsToDelete([]);
  }

  const removeElementsToDelete = (videoID) => {
    setElementsToDelete(elementsToDelete.filter(value=>{return value!==videoID}))
  }

  const deleteElements = async() => {
    let response = await fetch(`http://localhost:8000/buckets/${props.id}`,{method: "GET"});
    let data = await response.json();
    data.videos = data.videos.filter((value)=>{
      return !elementsToDelete.includes(value.video_id)
    })
    setElementsToDelete([]);
    await fetch(`http://localhost:8000/buckets/${props.id}`, {
        method: 'PUT', mode: 'cors',credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    response = await fetch("http://localhost:8000/buckets",{method: "GET"});
    response = await response.json();
    props.setData(response);
  }

  return (
  <div className="bucket-outer">
    <div className="bucket-header">
      <p>{props.title}</p>
      <Searchbar setSearch={setSearch} onSearchClear={onSearchClear}/>
   </div>
    <div className="bucket-body">
      {     
        displayVideoData.map((data)=>{
          return(<VideoCard key={data.video_id} setData={props.setData} id={data.video_id} name={data.video_name} 
                            link={data.video_link} bucketID={props.id} bucketName={props.title}
                            addElementsToDelete={addElementsToDelete} removeElementsToDelete={removeElementsToDelete}
                            deleteElementsToDelete={deleteElementsToDelete}/>)
        })
      }
      </div>
    <div className="bucket-footer">  
      <Modalbox id={props.id} setData={props.setData} btnName="ADD" deleteElementsToDelete={deleteElementsToDelete}/>
      <Button size="middle" className="bucket-btn" type="primary" onClick={deleteElements}>DELETE</Button>
    </div>
  </div>
)};


export default Bucket;