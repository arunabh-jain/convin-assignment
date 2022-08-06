import "./Stylesheets/Header.css";
import Modalbox from '../Components/Modalbox';
import Searchbar from "../Components/Searchbar";
const Header = () => (
    <div className="head">
            <h1>SRE INSIGHTS ADMIN</h1>
            <Searchbar/>
            <Modalbox/>
        </div>
);
export default Header;
