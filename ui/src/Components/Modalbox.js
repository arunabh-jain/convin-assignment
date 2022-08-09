import "./Stylesheets/Modalbox.css";
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import DropdownMenu from './Dropdown';
import { useNavigate } from "react-router-dom";

const Modalbox = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
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
    console.log(res.json());
    navigate("/");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="middle" className="open-btn" type="primary" onClick={showModal}>
        ADD
      </Button>
      <Modal
      title="ADD VIDEO"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      
      footer={[
          
          <Button className="add-btn" key="submit" type="primary"  onClick={handleOk}>
            OK
          </Button>
          
        ]}
        >
        <div className="job-body">
        <p className="job-p">SELECT A</p>
        <DropdownMenu/>
        </div>
        <div className="env-body">
        <p className="job-p">SELECT B</p>
        <DropdownMenu/>
        </div>
      </Modal>
    </>
  );
};

export default Modalbox;