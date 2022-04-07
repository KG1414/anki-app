import './ProgressBar.css';

const ProgressBar = ({ totalAnswers, numAnswered, data, scrollBarId }) => {

    let percentageAnswered = (numAnswered / totalAnswers) * 100;

    if (data === null || data === undefined) {
        return;
    };
    if (scrollBarId === null || scrollBarId === undefined) {
        return;
    };

    const allDataIDs = [];
    if (data !== undefined || data !== null) {
        data.map(data => allDataIDs.push(data.id))
    };

    const isIdMatch = allDataIDs.find(data => data === scrollBarId);
    console.log("ALLLLL", isIdMatch);

    if (isIdMatch !== scrollBarId) {
        percentageAnswered = 0;
        numAnswered = 0;
        totalAnswers = 0;
    };

    let styleBar = (
        <div
            className="progress-bar main__progress-bar"
            role="progressbar" style={{ width: "5%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
        >0%</div>
    );

    if (percentageAnswered !== isNaN && percentageAnswered > 0) {
        styleBar = (
            <div
                className="progress-bar main__progress-bar"
                role="progressbar" style={{ width: `${percentageAnswered}%` }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
            >{`${percentageAnswered}%`}</div>
        )
    };

    return (
        <div className="progress main__progress" >
            {styleBar}
        </div>
    );
};

export default ProgressBar;