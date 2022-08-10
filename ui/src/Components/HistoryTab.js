import "./Stylesheets/HistoryTab.css";
import { Button,Table} from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';

const Tableview = () => {
  const[history,setHistory] = useState([])

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("http://localhost:8000/history",{method: "GET"});
      const data = await response.json();
      setHistory(data);
    }
    fetchHistory()
  }, [])
  
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
      title: 'Video Name',
      dataIndex: 'video_name',
      key: 'video_name',
    },
    {
      title: 'Bucket Name',
      dataIndex: 'bucket_title',
      key: 'bucket_title',
    },
    {
      title: 'Video Link',
      dataIndex: 'video_link',
      key: 'video_link',
    },
    {
      title: 'Last Played',
      dataIndex: 'last_played',
      key: 'last_played',
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render : (_, record) => <Button type="link" onClick={()=>{deleteHistory(record.id)}}>Delete</Button>
    },
  ];

  return(
    <div className="outer">
      <div className="inner">
        <Table
        columns={columns}
        dataSource={history}
        pagination={{ pageSize: 10 }}
        />
    </div>
    </div>
  )
}


export default Tableview;