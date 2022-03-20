import Card from './Card';

const CardConstructor = (props) => {


    //multiple choice answers options
    let indexName1 = '';
    let listArray1 = [];
    for (let i = 0; i < Object.keys(props.multipleChoice).length; i++) {
        indexName1 = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        listArray1.push(props.multipleChoice[indexName1]);
    };

    let count = 0;
    const cardAnswersOptions = listArray1.map((ans, index) => {
        if (ans !== null) {
            count += 1;
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    //back of card answers
    let indexName = '';
    let listArray = [];
    for (let i = 0; i < count; i++) {
        indexName = `answer_${(i + 10).toString(36)}_correct`; // formula in ${} converts letter to number"
        listArray.push(props.correctAnswers[indexName]);
    };

    const cardAnswersList = listArray.map((ans, index) => {
        if (ans !== null) {
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    return (
        <Card
            key={props.id}
            id={props.id}
            topic={props.topic}
            question={props.question}
            multipleChoice={props.multipleChoice}
            correctAnswers={props.correctAnswers}
            correctAnswer={props.correctAnswer}
            explanation={props.explanation}

            cardOptionsList={cardAnswersOptions}
            cardAnswersList={cardAnswersList}

        />
    );
};

export default CardConstructor;