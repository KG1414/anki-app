import Card from './Card';
import CorrectAnswer from '../CorrectAnswer';

const CardFactory = (props) => {
    const { id, topic, question, multipleChoice, correctAnswers, correctAnswer, explanation } = props;

    //front of card answers
    let multipleChoiceArray = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        let indexName1 = `answer_${(i + 10).toString(36)}`;
        multipleChoiceArray.push(multipleChoice[indexName1]);
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
        let indexName = `answer_${(i + 10).toString(36)}_correct`;
        listArray.push(correctAnswers[indexName]);
    };

    const cardAnswersList = listArray.map((ans, index) => {
        if (ans !== null) {
            return <li key={index}>{ans}</li>
        };
        return ans;
    });

    const answerResponse = <CorrectAnswer
        correctAnswer={correctAnswer}
        correctAnswers={correctAnswers}
        explanation={explanation}
        count={count}
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