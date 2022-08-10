import "./Stylesheets/Popup.css";
import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';

const Popup = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name,setName] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    let data = {
      "bucket_title": name,
      "videos" : []
    }
    await fetch(`http://localhost:8000/buckets/`, {
        method: 'POST', mode: 'cors',credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    let response = await fetch("http://localhost:8000/buckets",{method: "GET"});
    response = await response.json();
    props.setData(response);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="middle" className="open-bucket-btn" type="primary" onClick={showModal}>ADD BUCKET
      </Button>
      <Modal
      title="ADD/EDIT BUCKET"
      visible={isModalVisible}
      onCancel={handleCancel}
      
      footer={[
          
          <Button className="add-btn" key="submit" type="primary" visible={isModalVisible} onClick={handleOk} onOk={handleOk} onCancel={handleCancel}>
            OK
          </Button>
          
        ]}>
            
            <div className="enter-bucket">
        <p className="select-bucket-p">ENTER BUCKET NAME</p>
        <Input className="bucket-text-box" placeholder="Please Enter" onChange={event=>{setName(event.target.value)}}/>
        </div>
      </Modal>
    </>
  );
};

export default Popup;