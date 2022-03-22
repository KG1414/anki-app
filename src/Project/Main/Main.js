import './Main.css';
import Cards from "../Cards/Cards";

const Main = (props) => {
    let contentSideBarOpen = "content";
    let contentSideBarClosed = "cleared__content";

    if (props.isSideBar) {
        contentSideBarOpen = "cleared__content";
        contentSideBarClosed = "sidebar__closed-content";
    };

    return (
        <>
            <div className={contentSideBarOpen}>
                {props.showCards && <Cards data={props.allTopicData} />}
                {props.showCards ? props.courseData : <p>No Data</p>}
            </div>

            <div className={contentSideBarClosed}>
                <i class="fa-solid fa-bars fa-2xl" onClick={props.sideBarToggler}></i>
                {props.showCards && <Cards data={props.allTopicData} />}
                {props.showCards ? props.courseData : <p>No Data</p>}
            </div>
        </>
    );
};

export default Main;


