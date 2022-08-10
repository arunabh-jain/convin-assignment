import React,{ Fragment } from "react";
import "./Stylesheets/Homepage.css";
import Footer from "../Components/Footer";
import TabSwitch from "../Components/TabSwitch";

const Homepage = () => {    
    return (
        <Fragment>
        <TabSwitch/>
        <Footer/>
        </Fragment>
    )
}

export default Homepage;