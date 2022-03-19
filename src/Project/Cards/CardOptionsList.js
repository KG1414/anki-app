const CardOptionsList = ({ multipleChoice }) => {
    let indexName = '';
    let listArray = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        indexName = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        listArray.push(multipleChoice[indexName]);
    };

    const list = listArray.map((ans) => {
        if (ans !== null) {
            return <li>{ans}</li>
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