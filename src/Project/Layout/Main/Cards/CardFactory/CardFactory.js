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
    compareAnswers,
    selectedAnswersArray,
    isAnswerSelectedHandler }) => {

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
            //props directly from API
            id={id}
            topic={topic}
            question={question}
            multipleChoice={multipleChoice}
            correctAnswers={correctAnswers}
            correctAnswer={correctAnswer}
            explanation={explanation}

            //props from createCard()
            isAnswerTrue={backOfCardAnswers}
            frontOfCardAnswers={frontOfCardAnswers}
            answerResult={answerResult}
            explainedAnswerResult={explainedAnswerResult}

            //functions passed as props from Cards.js
            selectedAnswersArray={selectedAnswersArray}
            isAnswerSelectedHandler={isAnswerSelectedHandler}
            compareAnswers={compareAnswers}
        />
    );
};

export default CardFactory;