import { useState } from 'react';
import Card from '../Card/Card';
import CorrectAnswer from '../Card/CorrectAnswer';
import { mappedCardFrontOptions } from './mappedCardFrontOptions';
import { cardFrontAnswersUI } from './CardFrontUI';

const CardFactory = ({ id, topic, question, multipleChoice, correctAnswers, correctAnswer, explanation }) => {
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);

    const isAnswerSelectedHandler = (event, id, res, cardID) => {
        event.preventDefault();
        const foundAnswerIndex = selectedAnswersArray.findIndex(answer => {
            return answer.id === id
        });
        if (foundAnswerIndex === -1) {
            setSelectedAnswersArray((prevValue) => {
                return [
                    ...prevValue,
                    {
                        cardID: cardID,
                        id: id,
                        question: res
                    }
                ]
            });
        } else {
            const tempArray = [...selectedAnswersArray]
            tempArray.splice(foundAnswerIndex, 1);
            setSelectedAnswersArray(tempArray);
        };
    };

    const [mappedMultipleChoiceArray] = mappedCardFrontOptions(
        multipleChoice
    );

    const [cardAnswersOptions, noOfAnswersCount] = cardFrontAnswersUI(
        mappedMultipleChoiceArray,
        selectedAnswersArray,
        isAnswerSelectedHandler,
        id
    );


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

            selectedAnswersArray={selectedAnswersArray}
            isAnswerTrue={listArray}
        />
    );
};

export default CardFactory;