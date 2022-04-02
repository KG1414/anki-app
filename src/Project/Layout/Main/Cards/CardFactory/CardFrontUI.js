export const cardFrontAnswersUI = (multipleChoiceArray, selectedAnswersArray, isAnswerSelectedHandler, cardID, correctAnswers) => {



    let noOfAnswersCount = 0;
    const cardAnswersOptions = multipleChoiceArray.map((res, index) => {
        if (res !== null) {
            noOfAnswersCount += 1;
            return (
                <li className={selectedAnswersArray.find(item => item.id === index) ? "active" : ""}
                    onClick={(event) => isAnswerSelectedHandler(event, index, res, cardID, correctAnswers)}
                    name={res}
                    key={index}>{noOfAnswersCount}. {res}
                </li>
            )
        };
        return res;
    });
    return [cardAnswersOptions, noOfAnswersCount];
}