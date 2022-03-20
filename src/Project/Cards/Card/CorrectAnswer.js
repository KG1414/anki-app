const CorrectAnswer = ({ correctAnswer, correctAnswers, explanation, count }) => {

    const answer = () => {
        if (correctAnswer !== null && !undefined && correctAnswer.length !== 0) {
            return <p>{correctAnswer}</p>;
        } else {
            return <p>Answer not available.</p>
        };
    };

    const explainedAnswer = () => {
        if (explanation !== null && !undefined && explanation.length !== 0) {
            return <p>{explanation}</p>;
        } else {
            return;
        };
    };

    return (
        <div>
            {answer && <h3>{answer()}</h3>}
            {explainedAnswer && <p>{explainedAnswer()}</p>}
        </div>
    )
};

export default CorrectAnswer;