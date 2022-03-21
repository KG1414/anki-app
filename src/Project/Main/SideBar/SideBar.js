import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = (props) => {
    const openNav = () => {
        //
    }

    const closeNav = () => {
        //
    }

    return (
        <div id="mySidebar" className="sidebar">
            <h1>Anki App</h1>
            <button className="closebtn">X</button>
            <Link className="nav__link" to="/home">Home</Link>
            <Link className="nav__link" to="/topic">Topic</Link>
            <Link className="nav__link" to="/contact">Contact</Link>

        </div>
    );
};

export default SideBar;

