import "./Stylesheets/Modalbox.css";
import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
import DropdownMenu from './Dropdown';
import { useNavigate } from "react-router-dom";

const Modalbox = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoName, setVideoName] = useState(undefined);
  const [videoLink, setVideoLink] = useState(undefined);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOkBucket = async () => {
    const response = await fetch(`http://localhost:8000/buckets/${props.id}`,{method: "GET"});
    const data = await response.json();
    let index = data.videos.length;
    const newData = {
      "video_id": index,
      "video_name":videoName,
      "video_link":videoLink
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
    console.log(res.json());
    navigate("/");
    setIsModalVisible(false);
  };

  const handleOkVideoCard = async () => {
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
        <div className="dropdown-body">
        <p className="dropdown-p">VIDEO BUCKET</p>
        <DropdownMenu/>
        </div>
        <div className="select-name">
        <p className="select-p">VIDEO NAME</p>
        <Input className="text-box" placeholder="Enter Name" onChange={event=>setVideoName(event.target.value)}/>
        </div>
        <div className="select-link">
        <p className="select-p">VIDEO URL</p>
        <Input className="text-box" placeholder="Enter Link" onChange={event=>setVideoLink(event.target.value)}/>
        </div>
      </Modal>
    </>
  );
};

export default Modalbox;