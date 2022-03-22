import './Main.css';
import Cards from "../Cards/Cards";

const Main = (props) => {
    return (
        <div className="content">
            {props.showCards && <Cards data={props.allTopicData[0]} show={props.showCards} />}
            {props.showCards ? props.courseData : <p>No Data</p>}
        </div>
    );
};

export default Main;


