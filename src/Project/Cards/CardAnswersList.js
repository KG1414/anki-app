const CardAnswersList = ({ correctAnswers, multipleChoice }) => {
    //multiple choice
    let indexName1 = '';
    let listArray1 = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        indexName1 = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        listArray1.push(multipleChoice[indexName1]);
    };

    let count = 0;
    listArray1.map((ans, index) => {
        if (ans !== null) {
            count += 1;
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    //card answers
    let indexName = '';
    let listArray = [];
    for (let i = 0; i < count; i++) {
        indexName = `answer_${(i + 10).toString(36)}_correct`; // formula in ${} converts letter to number"
        listArray.push(correctAnswers[indexName]);
    };

    const list = listArray.map((ans, index) => {
        if (ans !== null) {
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    return (
        <ol>
            {list}
        </ol>
    );
};

export default CardAnswersList;