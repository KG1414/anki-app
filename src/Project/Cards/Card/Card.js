import { useState } from 'react';
import './Card.css';
// import CardOptionsList from '../CardOptionsList';
// import CardAnswersList from '../CardAnswersList';
import CorrectAnswer from './CorrectAnswer';

const Card = (props) => {
    // const {
    //     id,
    //     topic,
    //     question,
    //     multipleChoice,
    //     correctAnswers,
    //     correctAnswer,
    //     explanation,

    //     cardOptionsList,
    //     cardAnswersList
    // } = props;

    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = () => {
        setIsClassActive((prevState) => (!prevState));
    };

    return (
        <div className="card" id={props.id}>
            <div className={isClassActive ? `card__inner` : `card__inner is-flipped`} onClick={cardFlip}>

                <div className="card__face card__face--front">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${props.topic}`}</h2>
                            <h4>Card Front</h4>
                        </div>
                        <div className="card__body">
                            <h3>{props.question}</h3>
                            {/* {<CardOptionsList multipleChoice={multipleChoice} />} */}
                            <ul>
                                {props.cardOptionsList}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{`Topic: ${props.topic}`}</h2>
                            <h4>Card Back</h4>
                        </div>
                        <div className="card__body">
                            <h3>{props.question}</h3>
                            {/* <CardAnswersList correctAnswers={correctAnswers} multipleChoice={multipleChoice} /> */}
                            <ul>{props.cardAnswersList}</ul>

                        </div>
                        <CorrectAnswer correctAnswer={props.correctAnswer} correctAnswers={props.correctAnswers} explanation={props.explanation} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;