import "./Stylesheets/Modalbox.css";
import { Button, Modal, Input } from 'antd';
import React, { useState} from 'react';
import DropdownMenu from './Dropdown';
import { useEffect } from 'react';


const Modalbox = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoName, setVideoName] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [bucketNameData,setBucketNameData] = useState([]);
  const [selectedBucket,setSelectedBucket] = useState(props.bucketID);

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch("http://localhost:8000/buckets",{method: "GET"});
      const data = await response.json();
      setBucketNameData(data);
    }
    if(props.btnName==="EDIT"){
      fetchData();
    }
  }, [isModalVisible])
  

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOkBucket = async () => {
    let response = await fetch(`http://localhost:8000/buckets/${props.id}`,{method: "GET"});
    const data = await response.json();
    let index = (data.videos.length===0) ? 0 :data.videos[data.videos.length-1].video_id+1;
    const newData = {
      "video_id": index,
      "video_name":videoName,
      "video_link":videoLink
    }
    data.videos[index]=newData;
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
    setIsModalVisible(false);
  };

  const onChange = (value) => {
    setSelectedBucket(value);
  };

  const handleOkVideoCard = async () => {
    if(selectedBucket!==props.bucketID){
      let response = await fetch(`http://localhost:8000/buckets/${selectedBucket}`,{method: "GET"});
      let data = await response.json();
      let index = (data.videos.length===0) ? 0 :data.videos[data.videos.length-1].video_id+1;
      const newData = {
        "video_id": index,
        "video_name":props.videoName,
        "video_link":props.videoLink
      }
      data.videos[index]=newData;
      await fetch(`http://localhost:8000/buckets/${selectedBucket}`, {
        method: 'PUT', mode: 'cors',credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });

      response = await fetch(`http://localhost:8000/buckets/${props.bucketID}`,{method: "GET"});
      data = await response.json();
      index = props.videoId;
      let videos = data.videos.filter((video)=>{
        return video.video_id!==index;
      })
      data.videos = videos;
      await fetch(`http://localhost:8000/buckets/${props.bucketID}`, {
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
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="middle" className="open-btn" type="primary" onClick={showModal}>
        {props.btnName}
      </Button>
      <Modal
      title={props.btnName}
      visible={isModalVisible}
      onCancel={handleCancel}
      
      footer={[
          
          <Button className="add-btn" key="submit" type="primary"  onClick={(props.btnName==="ADD")?handleOkBucket:handleOkVideoCard}>
            OK
          </Button>
          
        ]}
        >
        {
          props.btnName==="EDIT" &&
          <div className="dropdown-body">
          <p className="dropdown-p">VIDEO BUCKET</p>
          <DropdownMenu key={props.bucketID} bucketName={props.bucketName} bucketNameData={bucketNameData} onChange={onChange}/>
          </div>
        }
        <div className="select-name">
        <p className="select-p">VIDEO NAME</p>
        <Input className="text-box" placeholder="Enter Name" onChange={event=>setVideoName(event.target.value)}
          value={props.btnName==="EDIT" ? props.videoName : videoName}/>
        </div>
        <div className="select-link">
        <p className="select-p">VIDEO URL</p>
        <Input className="text-box" placeholder="Enter Link" onChange={event=>setVideoLink(event.target.value)}
          value={props.btnName==="EDIT" ? props.videoLink : videoLink}/>
        </div>
      </Modal>
    </>
  );
};

export default Modalbox;