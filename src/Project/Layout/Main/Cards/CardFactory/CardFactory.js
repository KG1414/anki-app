import { useState } from 'react';
import Card from '../Card/Card';
import CorrectAnswer from '../Card/CorrectAnswer';
import { createCard } from './createCard';

const CardFactory = ({ id, topic, question, multipleChoice, correctAnswers, correctAnswer, explanation }) => {
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);

    const isAnswerSelectedHandler = (event, id, res, cardID, correctAnswers) => {
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
                        question: res,
                        correctAnswers: correctAnswers
                    }
                ]
            });
        } else {
            const tempArray = [...selectedAnswersArray]
            tempArray.splice(foundAnswerIndex, 1);
            setSelectedAnswersArray(tempArray);
        };
    };

    const compareAnswers = (isAnswerTrue, selectedAnswersArray) => {
        console.log("Is Answer True?: ", isAnswerTrue);
        // Answers that are true or false:
        // [
        //     "false",
        //     "false",
        //     "true",
        //     "false"
        // ]

        console.log("Selected Answers Array?: ", selectedAnswersArray);
        //results from clicked answers after submit press:  {
        //{
        // "cardID": 510,
        // "id": 0,
        // "question": "Header",
        // },

        // {
        // "cardID": 510,
        // "id": 2,
        // "question": "Both the header and the body",
        // }
    };

    const [
        mappedMultipleChoiceArray,
        noOfAnswersCount,
        backOfCardAnswers
    ] = createCard(
        multipleChoice,
        correctAnswers
    );

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
            cardAnswersList={backOfCardAnswers}
            answerResponse={answerResponse}

            selectedAnswersArray={selectedAnswersArray}
            isAnswerTrue={backOfCardAnswers}

            isAnswerSelectedHandler={isAnswerSelectedHandler}
            multipleChoiceArray={mappedMultipleChoiceArray}

            compareAnswers={compareAnswers}
        />
    );
};

export default CardFactory;