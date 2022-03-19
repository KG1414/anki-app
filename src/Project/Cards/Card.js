import { useState } from 'react';
import './Card.css';
import CardOptionsList from './CardOptionsList';

const Card = (props) => {
    const { id, multipleChoice, topic, question } = props;
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
                        </div>
                        <div className="card__body">
                            <h3>{question}</h3>
                            <ol>
                                <CardOptionsList multipleChoice={multipleChoice} />
                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;