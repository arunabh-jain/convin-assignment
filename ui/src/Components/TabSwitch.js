import "./Stylesheets/TabSwitch.css"
import Bucket from "../Components/Bucket";
import HistoryTab from "../Components/HistoryTab";
import React,{ Fragment, useEffect,useState } from "react";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TabSwitch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8000/buckets",{method: "GET"});
        const data = await response.json();
        setData(data);
      }
      fetchData();
    }, [])

    return(
    <Fragment>
    <Tabs title="VIDEO BUCKET LIST" defaultActiveKey="1" >
    <TabPane tab="Home" key="1">
        <div className="tab-body">
            {
                data.map((data)=>{
                    return(<Bucket key={data.id} id={data.id} title={data.bucket_title} videos={data.videos} setData={setData}/>)
                })
            }
        </div>
    </TabPane>
    <TabPane tab="History" key="2">
            <HistoryTab/>
    </TabPane>
</Tabs>
<div className="header">
        <div className="head">
        <div className="image">
                <img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/606c5fcd82475240c607a79f_LOGO.svg" alt="logo" className="logo"/>
        </div>
        <p>VIDEO BUCKET LIST</p>
        </div>
        </div>
        
</Fragment>
);
}
export default TabSwitch;