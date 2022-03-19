const CorrectAnswer = ({ correctAnswer, correctAnswers }) => {

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


    console.log("Correct answers: ", correctAnswers);
    if (correctAnswer !== null && !undefined && correctAnswer.length !== 0) {
        return <h3>{correctAnswer}</h3>
    } else {
        return <h3>Answer not available.</h3>
    };
};

export default CorrectAnswer;