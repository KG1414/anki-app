import { useState } from 'react';
import Card from '../Card/Card';
import CorrectAnswer from '../Card/CorrectAnswer';

const CardFactory = (props) => {
    const { id, topic, question, multipleChoice, correctAnswers, correctAnswer, explanation } = props;
    const [answersArray, setAnswersArray] = useState([]);

    const onSelectHandler = (e, id, res) => {
        e.preventDefault();
        const foundAnswerIndex = answersArray.findIndex(answer => {
            return answer.id === id
        });

        if (foundAnswerIndex === -1) {
            setAnswersArray((prevValue) => {
                return [
                    ...prevValue,
                    {
                        id: id,
                        question: res,
                        activated: true
                    }
                ]
            });
        } else {
            const tempArray = [...answersArray]
            tempArray.splice(foundAnswerIndex, 1);
            setAnswersArray(tempArray);
        };
    };

    //front of card answers
    let multipleChoiceArray = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        let indexName1 = `answer_${(i + 10).toString(36)}`;
        multipleChoiceArray.push(multipleChoice[indexName1]);
    };

    let noOfAnswersCount = 0;
    const cardAnswersOptions = multipleChoiceArray.map((res, index) => {
        if (res !== null) {
            noOfAnswersCount += 1;
            return (
                <li className={answersArray.find(item => item.id === index && item.activated === true) ? "active" : ""}
                    onClick={(e) => onSelectHandler(e, index, res)}
                    name={res}
                    key={index}>{noOfAnswersCount}. {res}
                </li>
            )
        };
        return res;
    });

    //back of card answers
    let listArray = [];
    for (let i = 0; i < noOfAnswersCount; i++) {
        let indexName = `answer_${(i + 10).toString(36)}_correct`;
        listArray.push(correctAnswers[indexName]);
    };

    var num = 1;
    const cardAnswersList = listArray.map((res, index) => {
        if (res !== null) {
            return <li key={index}>{num++}. {res}</li>
        };
        return res;
    });

    const answerResponse = <CorrectAnswer
        correctAnswer={correctAnswer}
        correctAnswers={correctAnswers}
        explanation={explanation}
        count={noOfAnswersCount}
    />

    return (
        <Card
            key={id}
            id={id}
            topic={topic}
            question={question}
            multipleChoice={multipleChoice}
            correctAnswers={correctAnswers}
            correctAnswer={correctAnswer}
            explanation={explanation}
            cardOptionsList={cardAnswersOptions}
            cardAnswersList={cardAnswersList}
            answerResponse={answerResponse}
        />
    );
};

export default CardFactory;