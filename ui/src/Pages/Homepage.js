import { Fragment } from "react";
import "./Stylesheets/Homepage.css";
import Header from "../Components/Header";
import Bucket from "../Components/Bucket";
import Footer from "../Components/Footer";
import Data from "../Data/Data.json";

const storeData = (a,b) =>{
    console.log(a);
    console.log(b);
}

const Homepage = () => (
    <Fragment>
    <Header/>
    <div className="body">
        <Bucket onStoreData={storeData}/>
        <Bucket/>
        <Bucket/>
        <Bucket/>
    </div>
    <Footer/>
    </Fragment>
);
export default Homepage;