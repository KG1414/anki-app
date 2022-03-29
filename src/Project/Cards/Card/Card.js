import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = () => {
        setIsClassActive((prevState) => (!prevState));
    };

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
                            <ol>{props.cardOptionsList}</ol>
                        </div>
                        <button onClick={cardFlip}>Submit</button>
                    </div>
                </div>

                <div className="card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${props.topic}`}</h2>
                        </div>
                        <div className="card__body">
                            <h3>{props.question}</h3>
                            <ol>{props.cardAnswersList}</ol>
                        </div>
                        {props.answerResponse}
                        <button onClick={cardFlip}>To Front</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;