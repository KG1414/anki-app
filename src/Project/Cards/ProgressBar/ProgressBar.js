import './ProgressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress main__progress" >
            <div
                className="progress-bar main__progress-bar"
                role="progressbar" style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            >25%</div>
        </div>
    );
};

export default ProgressBar;