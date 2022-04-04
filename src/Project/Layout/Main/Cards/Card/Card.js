import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = (e, id, isAnswerTrue, selectedAnswersArray) => {
        e.preventDefault();
        props.compareAnswers(isAnswerTrue, selectedAnswersArray);
        setIsClassActive(prevState => !prevState);
    };

    const cardAnswersOptions = props.multipleChoiceArray.map((res, index) => (
        <li className={props.selectedAnswersArray.find(item => item.id === index) ? "active" : ""}
            onClick={(event) => props.isAnswerSelectedHandler(event, index, res, props.id, props.correctAnswers)}
            name={res}
            key={index}
        >{index + 1}. {res}
        </li>
    ));

    const cardAnswersList = props.isAnswerTrue.map((res, index) => (
        <li key={index}>{index + 1}. {res}</li>
    ));

    return (
        <div className="card" id={props.id}>
            <div className={isClassActive ? `card__inner` : `card__inner is-flipped`}>

                <div className="card__face card__face--front">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${props.topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{props.question}</h3>
                            <ol className="card__ol">{cardAnswersOptions}</ol>
                        </div>
                        <button onClick={(e) => cardFlip(e, props.id, props.isAnswerTrue, props.selectedAnswersArray)}>Submit</button>
                    </div>
                </div>

                <div className="card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${props.topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{props.question}</h3>
                            <ol className="card__ol">{cardAnswersList}</ol>
                        </div>
                        {props.answerResponse}
                        <button onClick={(e) => cardFlip(e, props.id)}>To Front</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;