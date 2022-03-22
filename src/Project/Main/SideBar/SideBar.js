import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = (props) => {
    // this.myRef = React.createRef();
    const [isTopicsDisplayed, setIsTopicsDisplayed] = useState(false);

    const openDropList = () => {
        setIsTopicsDisplayed(prevValue => !prevValue);
    };

    const topics = [
        {
            names: [
                "Code",
                "Linux",
                "CMS",
                "SQL",
                "Docker",
                "DevOps",
                "Bash",
                "Uncategorised"
            ]
        }
    ];

    const topicsList = topics[0].names.map((topic, index) => {
        return (
            <i key={index}>+ {topic}</i>
        );
    });

    return (
        <div className="sidebar">
            <h1>Anki App</h1>
            <button className="closebtn">X</button>
            <Link className="nav__link" to="/home">Home</Link>
            <button className="dropdown-btn" onClick={openDropList}>Topic
                <i className="fa fa-caret-down"></i>
            </button>
            {isTopicsDisplayed ? <div className="dropdown-container">
                <i onClick={props.createDataHandler}>+ Random</i>
                {topicsList}
            </div> : <></>}
            <Link className="nav__link" to="/contact">Contact</Link>
        </div>
    );
};

export default SideBar;