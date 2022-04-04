import { useState } from 'react';
import Card from '../Card/Card';
import { createCard } from './createCard';

const CardFactory = ({
    id,
    topic,
    question,
    multipleChoice,
    correctAnswers,
    correctAnswer,
    explanation,
    compareAnswers }) => {
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

    const [
        frontOfCardAnswers,
        backOfCardAnswers,
        answerResult,
        explainedAnswerResult
    ] = createCard(
        multipleChoice,
        correctAnswers,
        correctAnswer,
        explanation
    );

    return (
        <Card
            id={id}
            topic={topic}
            question={question}
            multipleChoice={multipleChoice}
            correctAnswers={correctAnswers}
            correctAnswer={correctAnswer}
            explanation={explanation}

            isAnswerTrue={backOfCardAnswers}
            frontOfCardAnswers={frontOfCardAnswers}
            answerResult={answerResult}
            explainedAnswerResult={explainedAnswerResult}

            selectedAnswersArray={selectedAnswersArray}
            isAnswerSelectedHandler={isAnswerSelectedHandler}
            compareAnswers={compareAnswers}
        />
    );
};

export default CardFactory;