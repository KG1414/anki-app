// import { useState } from 'react';
import Card from './Card';
import CorrectAnswer from './CorrectAnswer';

const CardConstructor = (props) => {
    // const [allAnswers, setAllAnswers] = useState();
    let multipleChoiceArray = [];
    for (let i = 0; i < Object.keys(props.multipleChoice).length; i++) {
        let indexName1 = `answer_${(i + 10).toString(36)}`; // formula in ${} converts letter to number"
        multipleChoiceArray.push(props.multipleChoice[indexName1]);
    };

    let count = 0;
    const cardAnswersOptions = multipleChoiceArray.map((ans, index) => {
        if (ans !== null) {
            count += 1;
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    //back of card answers
    let listArray = [];
    for (let i = 0; i < count; i++) {
        let indexName = `answer_${(i + 10).toString(36)}_correct`; // formula in ${} converts letter to number"
        listArray.push(props.correctAnswers[indexName]);
    };

    const cardAnswersList = listArray.map((ans, index) => {
        if (ans !== null) {
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    const answerResponse = <CorrectAnswer
        correctAnswer={props.correctAnswer}
        correctAnswers={props.correctAnswers}
        explanation={props.explanation}
        count={count}
    />

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
            answerResponse={answerResponse}
        />
    );
};

export default CardConstructor;