import './ProgressBar.css';

const ProgressBar = ({ totalAnswers, numAnswered }) => {

    let percentageAnswered = (numAnswered / totalAnswers) * 100;

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