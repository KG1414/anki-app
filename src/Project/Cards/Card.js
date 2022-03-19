import { useState } from 'react';
import './Card.css';
import CardOptionsList from './CardOptionsList';

const Card = (props) => {
    const { id, multipleChoice, topic, question } = props;
    const [isClassActive, setIsClassActive] = useState(false);

    const cardFlip = () => {
        setIsClassActive((prevState) => (!prevState));
    };

    // const loopList = () => {
    //     let answer = '';
    //     for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
    //         // console.log("letter " + (i + 10).toString(36) + " ");
    //         answer = `answer_${(i + 10).toString(36)}`;
    //         console.log(multipleChoice[answer]);
    //         return <CardOptionsList multipleChoice={multipleChoice[answer]} />
    //     }
    // }


    // let answer = '';
    // for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
    //     // console.log("letter " + (i + 10).toString(36) + " ");
    //     answer = `answer_${(i + 10).toString(36)}`;
    //     console.log(multipleChoice[answer])
    // }


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
                                {multipleChoice.answer_a !== null ? <li>{multipleChoice.answer_a}</li> : null}
                                {multipleChoice.answer_b !== null ? <li>{multipleChoice.answer_b}</li> : null}
                                {multipleChoice.answer_c !== null ? <li>{multipleChoice.answer_c}</li> : null}
                                {multipleChoice.answer_d !== null ? <li>{multipleChoice.answer_d}</li> : null}
                                {multipleChoice.answer_e !== null ? <li>{multipleChoice.answer_e}</li> : null}
                                {multipleChoice.answer_f !== null ? <li>{multipleChoice.answer_f}</li> : null}
                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;