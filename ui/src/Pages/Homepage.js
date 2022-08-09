import { Fragment } from "react";
import "./Stylesheets/Homepage.css";
import Header from "../Components/Header";
import Bucket from "../Components/Bucket";
import Footer from "../Components/Footer";

const Homepage = () => (
    <Fragment>
    <Header/>
    <div className="body">
        <Bucket/>
        <Bucket/>
        <Bucket/>
        <Bucket/>
    </div>
    <Footer/>
    </Fragment>
);
export default Homepage;