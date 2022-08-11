import "./Stylesheets/HistoryTab.css";
import { Button,Table} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useEffect } from 'react';

const Tableview = (props) => {
  const[history,setHistory] = useState([])

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("http://localhost:8000/history",{method: "GET"});
      const data = await response.json();
      setHistory(data);
    }
    fetchHistory()
  }, [props.active])
  
  const deleteHistory = async (id) => {
    await fetch(`http://localhost:8000/history/${id}`, {
      method: 'DELETE', mode: 'cors',credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
    });
    let response = await fetch("http://localhost:8000/history",{method: "GET"});
    response = await response.json();
    setHistory(response);
  }

  const columns = [
    {
      title: 'VIDEO NAME',
      dataIndex: 'video_name',
      key: 'video_name',
    },
    {
      title: 'BUCKET NAME',
      dataIndex: 'bucket_title',
      key: 'bucket_title',
    },
    {
      title: 'VIDEO LINK',
      dataIndex: 'video_link',
      key: 'video_link',
    },
    {
      title: 'PLAY TIME',
      dataIndex: 'last_played',
      key: 'last_played',
    },
    {
      title: 'DELETE',
      dataIndex: 'id',
      key: 'id',
      render : (_, record) => <Button type="link" onClick={()=>{deleteHistory(record.id)}}><DeleteOutlined /></Button>
    },
  ];

  return(
    <div className="outer">
      <div className="inner">
        <Table
        size="small"
        columns={columns}
        dataSource={history}
        pagination={{ size:"default", pageSize: 10 }}
        />
    </div>
    </div>
  )
}


export default Tableview;