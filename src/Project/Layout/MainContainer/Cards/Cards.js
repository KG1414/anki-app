import { useState } from 'react';
import CardFactory from './CardFactory/CardFactory';
import './Cards.css';
import { ringLoader } from '../../../../shared/components/Spinners/Spinners';
import Carousel from '../../../../shared/components/Carousel/Carousel';

const Cards = ({ data, loading, error, answersAnswered }) => {
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);

    const isAnswerSelectedHandler = (event, id, result, cardID, correctAnswers) => {
        event.preventDefault();

        const foundAnswerIndex = selectedAnswersArray.findIndex(answer => {
            return answer.id === id && answer.cardID === cardID
        });

        if (foundAnswerIndex === -1) {
            setSelectedAnswersArray((prevValue) => {
                return [
                    ...prevValue,
                    {
                        cardID: cardID,
                        id: id,
                        question: result,
                        correctAnswers: correctAnswers
                    }
                ]
            });
        } else {
            const tempArray = [...selectedAnswersArray]
            tempArray.splice(foundAnswerIndex, 1);
            setSelectedAnswersArray(tempArray);
        };
    };



    const compareAnswers = (isAnswerTrue, selectedAnswersArray, cardID) => {
        console.log("All Data", data);

        //Step 1: Find Data only from selected card
        const foundCard = data.findIndex(allData => {
            return allData.id === cardID
        });
        const cardToCheck = data[foundCard];

        // Step 2: Map actual answers into Boolean values
        const correctAnswers = [];

        const newSelectedAnswersArray = { ...cardToCheck };

        const answersToReturn = Object.values(newSelectedAnswersArray.answers).filter(answer => {
            return answer !== null;
        });

        let count = answersToReturn.length;
        Object.values(newSelectedAnswersArray.correct_answers).map(value => {
            if (count > 0) {
                count--;
                var toBoolean = value.toLowerCase() === "true";
            };
            return correctAnswers.push(toBoolean);
        });

        const filteredAnswers = Object.values(correctAnswers).filter(answer => {
            return answer !== undefined && answer !== null;
        });

        // Step 3: Create a hashmap/key-value pairs of the users selected answers
        if (selectedAnswersArray === undefined || null) {
            return;
        }

        const selectedAnswers = [];
        selectedAnswersArray.map(answered => {
            if (answered.cardID === cardID) {
                return selectedAnswers[answered.id] = true
            } else {
                return;
            }
        });
        console.log("mappedSelectedAnswers", selectedAnswers);

        // Step 4: Compare the actual answer to the users selected answers
        const finalResult = [];
        let index = 0;

        // filteredAnswers.map(correctAnswer => {
        //     if (mappedSelectedAnswers[index].id === index) {
        //         finalResult.push(correctAnswer === true);
        //     } else {
        //         finalResult.push(correctAnswer === false);
        //     }
        //     index += 1;
        //     return correctAnswer;
        // });
        // console.log("RESULT!!!!", finalResult);
        // return finalResult;
    };


    let cardResult = <div className="anki__cards-error"><h3>Nothing is here.</h3></div>;
    if (loading) {
        cardResult = <div className="anki__cards">{ringLoader(loading)}</div>
    };
    if (!loading && !data && error) {
        cardResult = <div className="anki__cards-error"><h3>An unexpected error occured.</h3></div>
        console.error(error);
    };
    if (data && !loading) {
        cardResult = data.map((data) => {
            const {
                id,
                category,
                question,
                answers,
                correct_answers,
                correct_answer,
                explanation
            } = data;
            return (
                <CardFactory
                    key={id}
                    id={id}
                    topic={category}
                    question={question}
                    multipleChoice={answers}
                    correctAnswers={correct_answers}
                    correctAnswer={correct_answer}
                    explanation={explanation}
                    compareAnswers={compareAnswers}
                    selectedAnswersArray={selectedAnswersArray}
                    isAnswerSelectedHandler={isAnswerSelectedHandler}
                    answersAnswered={answersAnswered}
                />
            );
        });
    };

    return (
        <Carousel visibleCardCount={1} totalElements={data.length}>
            {cardResult}
        </Carousel>
    );
};

export default Cards;