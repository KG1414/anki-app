import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const {
        id,
        topic,
        question,
        correctAnswers,
        answerResult,
        explainedAnswerResult,
        isAnswerTrue,
        frontOfCardAnswers,
        selectedAnswersArray,
        isAnswerSelectedHandler,
        compareAnswers
    } = props;

    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = (e, id, isAnswerTrue, selectedAnswersArray) => {
        e.preventDefault();
        compareAnswers(isAnswerTrue, selectedAnswersArray);
        setIsClassActive(prevState => !prevState);
    };

    const cardAnswersOptions = frontOfCardAnswers.map((answer, index) => (
        <li className={selectedAnswersArray.find(item => item.id === index && id === item.cardID) ? "active" : ""}
            onClick={(event) => isAnswerSelectedHandler(event, index, answer, id, correctAnswers)}
            name={answer}
            key={index}
        >{index + 1}. {answer}
        </li>
    ));

    const cardAnswersList = isAnswerTrue.map((answer, index) => (
        <li key={index}>{index + 1}. {answer}</li>
    ));

    return (
        <div className="card" id={id}>
            <div className={isClassActive ? `card__inner` : `card__inner is-flipped`}>

                <div className="card__face card__face--front">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <ol className="card__ol">{cardAnswersOptions}</ol>
                        </div>
                        <button onClick={(e) => cardFlip(e, id, isAnswerTrue, selectedAnswersArray)}>Submit</button>
                    </div>
                </div>

                <div className="card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <ol className="card__ol">{cardAnswersList}</ol>
                        </div>
                        <p>{answerResult()}</p>
                        <p>{explainedAnswerResult()}</p>
                        <button onClick={(e) => cardFlip(e, id)}>To Front</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;