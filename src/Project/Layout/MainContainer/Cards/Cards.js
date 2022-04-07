import { useState } from 'react';
import CardFactory from './CardFactory/CardFactory';
import './Cards.css';
import { ringLoader } from '../../../../common/components/Spinners/Spinners';
import Carousel from '../../../../common/components/Carousel/Carousel';

const Cards = ({ data, loading, error, answersAnswered }) => {
    const [selectedAnswersArray, setSelectedAnswersArray] = useState([]);
    const [isUserCorrect, setIsUserCorrect] = useState(false);

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

    const compareAnswers = (selectedAnswersArray, cardID) => {
        if (selectedAnswersArray === undefined || null) {
            return;
        };

        //Step 1: Find Data only from selected card
        const foundCard = data.findIndex(allData => {
            return allData.id === cardID
        });
        const cardToCheck = data[foundCard];

        // Step 2: Map actual answers into Boolean values
        const correctAnswers = [];
        const newSelectedAnswersArray = { ...cardToCheck };
        const noOfAnswersToReturn = Object.values(newSelectedAnswersArray.answers).filter(answer => {
            return answer !== null;
        });
        let count = noOfAnswersToReturn.length;
        Object.values(newSelectedAnswersArray.correct_answers).map(value => {
            if (count > 0) {
                count--;
                var toBoolean = value.toLowerCase() === "true";
            };
            return correctAnswers.push(toBoolean);
        });
        const filteredActualAnswers = Object.values(correctAnswers).filter(answer => {
            return answer !== undefined && answer !== null;
        });

        // Step 3: Create a hashmap/key-value pairs of the users selected answers
        const selectedAnswers = [];
        selectedAnswersArray.map(answered => {
            if (answered.cardID === cardID) {
                return selectedAnswers[answered.id] = true
            } else {
                return null;
            }
        });

        // Step 4: Compare the actual answer to the users selected answers
        const booleanResult = [];
        const stringResult = [];
        let index = 0;
        filteredActualAnswers.map(correctAnswer => {
            if (selectedAnswers[index] === true && correctAnswer === true) {
                stringResult.push(`${true} correctly selected`);
                booleanResult.push(true);
            }
            if (selectedAnswers[index] === true && correctAnswer === false) {
                stringResult.push(`${false} incorrectly answered`);
                booleanResult.push(false);
            }
            if ((selectedAnswers[index] === undefined || null) && correctAnswer === false) {
                stringResult.push(`${true} didn't answer, incorrect IF selected.`);
                booleanResult.push(true);
            }
            if ((selectedAnswers[index] === undefined || null) && correctAnswer === true) {
                stringResult.push(`${false} didn't answer, would have been correct IF selected`);
                booleanResult.push(false);
            }
            index += 1;
            return correctAnswer;
        });

        // Step 5: Extrapolate answers for use throughout the app
        let isCorrectAnswerCheck = resultArray => resultArray.every(ans => ans === true);
        const isCorrectAnswers = isCorrectAnswerCheck(booleanResult);
        setIsUserCorrect(isCorrectAnswers);

        console.log("Boolean result", booleanResult)
        console.log("String result", stringResult);
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
                    isUserCorrect={isUserCorrect}
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