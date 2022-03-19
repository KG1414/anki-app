const CardOptionsList = ({ multipleChoice, answerAmountNeeded }) => {
    let indexName = '';
    let listArray = [];

    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        indexName = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        listArray.push(multipleChoice[indexName]);
    };

    let count = 0;
    const list = listArray.map((ans, index) => {
        if (ans !== null) {
            count += 1;
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

export default CardOptionsList;