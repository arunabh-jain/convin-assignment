import "./Stylesheets/Header.css";
import Modalbox from '../Components/Modalbox';
import Searchbar from "../Components/Searchbar";
const Header = () => (
    <div className="header">
        <div className="head">
            <div className="image">
                <img src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png" alt="logo" className="logo"/>
            </div>
            <h1>SRE INSIGHTS ADMIN</h1>
            <Searchbar/>
            <Modalbox/>
        </div>
    </div>
);
export default Header;

