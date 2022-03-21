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
            <button className="closebtn" onclick={closeNav}>X</button>
            <Link className="nav__link" to="/home">Home</Link>
            <Link className="nav__link" to="/contact">Contact</Link>
            <Link></Link>
        </div>
    );
};

export default SideBar;

