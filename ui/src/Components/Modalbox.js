import "./Stylesheets/Modalbox.css";
import { Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
import DropdownMenu from './Dropdown';

const Modalbox = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    props.onStoreData(1,1);
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
      title="ADD/MODIFY"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      
      footer={[
          
          <Button className="add-btn" key="submit" type="primary"  onClick={handleOk}>
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
        <Input className="text-box" placeholder="Enter Name"/>
        </div>
        <div className="select-link">
        <p className="select-p">VIDEO URL</p>
        <Input className="text-box" placeholder="Enter Link"/>
        </div>
      </Modal>
    </>
  );
};

export default Modalbox;