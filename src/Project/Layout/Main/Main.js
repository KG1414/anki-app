import './Main.css';
import Cards from "../../Cards/Cards";

const Main = (props) => {
    return (
        <div className="content">
            {props.showCards && <Cards data={props.data} loading={props.loading} error={props.error} />}
        </div>

    );
};

export default Main;


