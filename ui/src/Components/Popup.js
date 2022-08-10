import "./Stylesheets/Popup.css";
import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';

const Popup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
          
          <Button className="add-btn" key="submit" type="primary" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            OK
          </Button>
          
        ]}>
            
            <div className="enter-bucket">
        <p className="select-bucket-p">ENTER BUCKET NAME</p>
        <Input className="bucket-text-box" placeholder="Please Enter" onChange={console.log("bucket name")}/>
        </div>
      </Modal>
    </>
  );
};

export default Popup;