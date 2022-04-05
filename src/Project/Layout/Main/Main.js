import { useState } from "react";
import Cards from "./Cards/Cards";
import ProgressBar from './Cards/ProgressBar/ProgressBar';
import './Main.css';
import './Cards/ProgressBar/ProgressBar.css';

const Main = (props) => {
    const [num, setNum] = useState(0);

    const answersAnswered = (count) => {
        setNum(prevValue => prevValue + count);
        console.log(num);
    };

    let showContent = <h2 className="main__content" style={{ margin: "20% 0 0 30%" }}>{" "} No topic selected.</h2>;
    if (props.showCards) {
        showContent = <Cards data={props.data} loading={props.loading} error={props.error} answersAnswered={answersAnswered} />
    };

    return (
        <div className="main__content">
            <div className="main__content-nav">
                <div className="breadcrumb__wrapper">
                    <nav>
                        <ol className="breadcrumb__list">
                            <li>Completed</li>
                            <li>Re-Test</li>
                        </ol>
                    </nav>
                </div>
                <div className="progressbar__wrapper">
                    <ProgressBar totalAnswers={props.data.length} numAnswered={num} />
                </div>
            </div>
            {showContent}
        </div>
    );
};

export default Main;


