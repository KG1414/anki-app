import Card from '../Card/Card';
import CorrectAnswer from '../Card/CorrectAnswer';
import { mappedCardFrontOptions } from './CardFront/mappedCardFrontOptions';
import { mappedCardBackOptions } from './CardBack/mappedCardBackOptions';
import { cardFrontAnswersUI } from './CardFront/cardFrontAnswersUI';
import { cardBackAnswersUI } from './CardBack/cardBackAnswersUI';

const CardFactory = ({
    id,
    topic,
    question,
    multipleChoice,
    correctAnswers,
    correctAnswer,
    explanation,
    isAnswerSelectedHandler,
    selectedAnswersArray }) => {

    const [mappedMultipleChoiceArray] = mappedCardFrontOptions(
        multipleChoice
    );

    const [cardAnswersOptions, noOfAnswersCount] = cardFrontAnswersUI(
        mappedMultipleChoiceArray,
        selectedAnswersArray,
        isAnswerSelectedHandler
    );

    const [mappedBackCardAnswers] = mappedCardBackOptions(
        noOfAnswersCount,
        correctAnswers
    );

    const [cardAnswersList] = cardBackAnswersUI(
        mappedBackCardAnswers
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
            cardOptionsList={cardAnswersOptions}
            cardAnswersList={cardAnswersList}
            answerResponse={answerResponse}
        />
    );
};

export default CardFactory;