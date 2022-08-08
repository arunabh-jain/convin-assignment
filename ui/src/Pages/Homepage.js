import { Fragment } from "react";
import "./Stylesheets/Homepage.css";
import Header from "../Components/Header";
import Tableview from "../Components/Tableview";
import Footer from "../Components/Footer";

const Homepage = () => (
    <Fragment>
    <Header/>
    <Tableview/>
    <Footer/>
    </Fragment>
);
export default Homepage;