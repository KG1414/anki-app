import { useState } from "react";
import Cards from "./Cards/Cards";
import ProgressBar from "./ProgressBar/ProgressBar";
import './MainContainer.css';

const Main = ({ showCards, data, loading, error }) => {
    const [num, setNum] = useState(0);
    const [scrollBarId, setScrollBarId] = useState(0);

    const answersAnswered = (count, id) => {
        const allDataIDs = [];
        if (data !== undefined || data !== null) {
            data.map(data => allDataIDs.push(data.id))
        };
        const isIdMatch = allDataIDs.find(data => data === scrollBarId);
        if (isIdMatch !== scrollBarId) {
            setNum(0);
        };
        setNum(prevValue => prevValue + count);
        setScrollBarId(id);
    };

    let showContent = <h2 style={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>No topic selected.</h2>;
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
                    <ProgressBar totalAnswers={data.length} numAnswered={num} data={data} scrollBarId={scrollBarId} />
                </div>
            </div>
            {showContent}
        </div>
    );
};

export default Main;


