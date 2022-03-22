import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = (props) => {
    const [isTopicsDisplayed, setIsTopicsDisplayed] = useState(false);
    const [caretClicked, setCaretClicked] = useState(false);

    const openMenuDropList = () => {
        setIsTopicsDisplayed(prevValue => !prevValue);
        setCaretClicked(prevValue => !prevValue);
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

    let sideBar = "sidebar";
    if (props.isSideBar) {
        sideBar = "cleared__sidebar";
    };

    return (
        <div className={sideBar}>
            <h1 className="sidebar__title">Anki App
                <i className="fa-solid fa-arrow-right-arrow-left fa-2xs" onClick={props.sideBarToggler}></i>
            </h1>
            <Link className="nav__link" to="/home">Home</Link>
            <button className="dropdown-btn" onClick={openMenuDropList}>Topic
                <i className={caretClicked ? `fa fa-caret-right` : `fa fa-caret-down`}></i>
            </button>
            {isTopicsDisplayed ? <div className="dropdown-container">
                <i onClick={(e) => props.createDataHandler(e, 'topics')}>+ Random</i>
                {topicsList}
            </div> : <></>}
            <Link className="nav__link" to="/contact">Contact</Link>
        </div>
    );
};

export default SideBar;