export const createCard = (multipleChoice, correctAnswers) => {
    let noOfAnswersCount = 0;

    let mappedMultipleChoiceArray = [];
    Object.keys(multipleChoice).map(obj => {
        if (multipleChoice[obj] !== null) {
            noOfAnswersCount += 1;
            return mappedMultipleChoiceArray.push(multipleChoice[obj])
        }
        return -1;
    });

    let backOfCardAnswers = [];
    Object.keys(correctAnswers).map(obj => {
        if (correctAnswers[obj] !== null && backOfCardAnswers.length < noOfAnswersCount) {
            return backOfCardAnswers.push(correctAnswers[obj])
        }
        return -1;
    });

    return [mappedMultipleChoiceArray, noOfAnswersCount, backOfCardAnswers];
};
