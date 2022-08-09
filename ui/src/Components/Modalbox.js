import "./Stylesheets/Modalbox.css";
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import DropdownMenu from './Dropdown';

const Modalbox = () => {
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