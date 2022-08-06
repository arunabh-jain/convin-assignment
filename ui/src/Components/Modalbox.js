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
        ADD TASK
      </Button>
      <Modal
      title="SELECT TASK"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
          
          <Button className="add-btn" key="submit" type="primary"  onClick={handleOk}>
            ADD
          </Button>
          
        ]}
        >
        <div className="job-body">
        <p className="job-p">Select Job</p>
        <DropdownMenu />
        </div>
        <div className="env-body">
        <p className="job-p">Select Environment</p>
        <DropdownMenu/>
        </div>
      </Modal>
    </>
  );
};

export default Modalbox;