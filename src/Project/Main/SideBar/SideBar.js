import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div>
            <h1>Layout</h1>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default SideBar;