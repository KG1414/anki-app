const CorrectAnswer = ({ correctAnswer, correctAnswers, explanation }) => {

    //////
    // let indexName = '';
    // let listArray = [];
    // for (let i = 0; i < count; i++) {
    //     indexName = `answer_${(i + 10).toString(36)}_correct`; // formula in ${} converts letter to number"
    //     listArray.push(correctAnswers[indexName]);
    // };

    // const list = listArray.map((ans, index) => {
    //     if (ans !== null) {
    //         return <li key={index}>{ans}</li>
    //     };
    //     return ans;
    // });
    ////////

    // if (correctAnswer !== null && !undefined && correctAnswer.length !== 0) {
    //     return <h3>{correctAnswer}</h3>
    // } else {
    //     return <h3>Answer not available.</h3>
    // };

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