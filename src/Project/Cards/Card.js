import { useState } from 'react';
import './Card.css';
import CardOptionsList from './CardOptionsList';
import CardAnswersList from './CardAnswersList';


const Card = (props) => {
    const { id, topic, question, multipleChoice, correctAnswers, correctAnswer } = props;
    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = () => {
        setIsClassActive((prevState) => (!prevState));
    };

    return (
        <div className="card" id={id}>
            <div className={isClassActive ? `card__inner` : `card__inner is-flipped`} onClick={cardFlip}>

                <div className="card__face card__face--front">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${topic}`}</h2>
                            <h4>Card Front</h4>
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <CardOptionsList multipleChoice={multipleChoice} />
                        </div>
                    </div>
                </div>

                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${topic}`}</h2>
                            <h4>Card Back</h4>
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <CardAnswersList correctAnswers={correctAnswers} correctAnswer={correctAnswer} multipleChoice={multipleChoice} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;