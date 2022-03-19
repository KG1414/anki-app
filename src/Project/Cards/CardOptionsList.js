const CardOptionsList = ({ multipleChoice }) => {


    let indexName = '';
    let res = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        indexName = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        res.push(multipleChoice[indexName]);
        console.log("RES", res);
    };

    const yes = res.map((ans) => {
        if (ans !== null) {
            return <li>{ans}</li>
        };
        return ans;
    })

    return (
        <ol>
            {yes}
        </ol>
    );
};

export default CardOptionsList;