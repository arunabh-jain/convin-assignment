import React,{ Fragment,useEffect,useState } from "react";
import "./Stylesheets/Homepage.css";
import Header from "../Components/Header";
import Bucket from "../Components/Bucket";
import Footer from "../Components/Footer";

const Homepage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8000/buckets",{method: "GET"});
        const data = await response.json();
        setData(data);
        console.log(data)
      }
      fetchData();
    }, [])
    
    return (
        <Fragment>
        <Header/>
        <div className="body">
            {
                data.map((data)=>{
                    return(<Bucket key={data.id} id={data.id} title={data.bucket_title} videos={data.videos} setData={setData}/>)
                })
            }
        </div>
        <Footer/>
        </Fragment>
    )
}

export default Homepage;