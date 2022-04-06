import { useState } from "react";
import Cards from "./Cards/Cards";
import ProgressBar from './Cards/ProgressBar/ProgressBar';
import './MainContainer.css';
import './Cards/ProgressBar/ProgressBar.css';

const Main = ({ showCards, data, loading, error }) => {
    const [num, setNum] = useState(0);

    const answersAnswered = (count) => {
        setNum(prevValue => prevValue + count);
    };

    let showContent = <h2 className="main__content">{" "} No topic selected.</h2>;
    if (showCards) {
        showContent = <Cards data={data} loading={loading} error={error} answersAnswered={answersAnswered} />;
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
                <div>
                    <ProgressBar totalAnswers={data.length} numAnswered={num} />
                </div>
            </div>
            {showContent}
        </div>
    );
};

export default Main;


