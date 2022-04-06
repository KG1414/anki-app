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

    const compareAnswers = (selectedAnswersArray, cardID) => {
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
        };
        const selectedAnswers = [];
        selectedAnswersArray.map(answered => {
            if (answered.cardID === cardID) {
                return selectedAnswers[answered.id] = true
            } else {
                return null;
            }
        });
        console.log("selectedAnswers", selectedAnswers);

        // Step 4: Compare the actual answer to the users selected answers
        const booleanResult = [];
        const stringResult = [];
        let index = 0;

        filteredAnswers.map(correctAnswer => {
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
        console.log("Boolean result", booleanResult)
        console.log("String result", stringResult);
        // If didn't answer, but answer on other side is false then user gets "true", however only true/true should be highlighted green (first IF statement). 
        // Only if all answers in finalResult show true did the user get all their answers correct and didn't select any incorrect answers

        return [booleanResult, stringResult];
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