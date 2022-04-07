import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const {
        id,
        topic,
        question,
        correctAnswers,
        explainedAnswerResult,
        frontOfCardAnswers,
        selectedAnswersArray,
        isAnswerSelectedHandler,
        compareAnswers,
        answersAnswered,
        isUserCorrect
    } = props;

    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = (e, id, cardSide, selectedAnswersArray) => {
        e.preventDefault();
        answersAnswered(1);
        compareAnswers(selectedAnswersArray, id);
        setIsClassActive(prevState => !prevState);
    };

    const frontCardAnswersOptions = frontOfCardAnswers.map((answer, index) => (
        <li className={selectedAnswersArray.find(item => item.id === index && item.cardID === id) ? "active front__select" : "front__select"}
            onClick={(event) => isAnswerSelectedHandler(event, index, answer, id, correctAnswers)}
            name={answer}
            key={index}
        >{index + 1}. {answer}
        </li>
    ));

    const backCardAnswersOptions = frontOfCardAnswers.map((answer, index) => (
        <li className={selectedAnswersArray.find(item => item.id === index && item.cardID === id) ? "active__back back__select" : "back__select"}
            name={answer}
            key={index}
        >{index + 1}. {answer}
        </li>
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
                            <ol className="card__ol">{frontCardAnswersOptions}</ol>
                        </div>
                        <button onClick={(e) => cardFlip(e, id, "front", selectedAnswersArray)}>Submit</button>
                    </div>
                </div>

                <div className="card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <ol className="card__ol">{backCardAnswersOptions}</ol>
                        </div>
                        {isUserCorrect ?
                            <h3 className="correct__answer">Correct Answer!</h3> :
                            <h3 className="incorrect__answer">Incorrect Answer</h3>
                        }
                        <p className="explained__answer">{explainedAnswerResult()}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;