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
    isAnswerSelectedHandler,
    answersAnswered,
    isUserCorrect }) => {

    const [
        frontOfCardAnswers,
        backOfCardAnswers,
        explainedAnswerResult,
    ] = createCard(
        multipleChoice,
        correctAnswers,
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

            //functions passed as props from Cards.js
            compareAnswers={compareAnswers}
            selectedAnswersArray={selectedAnswersArray}
            isAnswerSelectedHandler={isAnswerSelectedHandler}
            isUserCorrect={isUserCorrect}

            //props from createCard()
            frontOfCardAnswers={frontOfCardAnswers}
            isAnswerTrue={backOfCardAnswers}
            explainedAnswerResult={explainedAnswerResult}

            //functions passed from main.js
            answersAnswered={answersAnswered}
        />
    );
};

export default CardFactory;