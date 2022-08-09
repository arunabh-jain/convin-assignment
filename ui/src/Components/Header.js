import "./Stylesheets/Header.css";
import Modalbox from '../Components/Modalbox';
const Header = () => (
    <div className="header">
        <div className="head">
            <div className="image">
                <img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/606c5fcd82475240c607a79f_LOGO.svg" alt="logo" className="logo"/>
            </div>
            <h1>VIDEO BUCKET LIST</h1>
            <Modalbox/>
        </div>
    </div>
);
export default Header;

