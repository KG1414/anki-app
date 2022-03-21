import './Main.css';
import Cards from "../Cards/Cards";

const Main = (props) => {
    return (
        <div className="content">
            <button onClick={props.createDataHandler}>Pull data</button>
            {props.show && <Cards data={props.allTopicData[0]} show={props.show} />}
            {props.show ? props.courseData : <p>No Data</p>}
        </div>
    );
};

export default Main;


