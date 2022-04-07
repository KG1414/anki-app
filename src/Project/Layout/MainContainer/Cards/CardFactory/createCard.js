export const createCard = (multipleChoice, correctAnswers, explanation) => {
    let noOfAnswersCount = 0;

    let frontOfCardAnswers = [];
    Object.keys(multipleChoice).map(obj => {
        if (multipleChoice[obj] !== null) {
            noOfAnswersCount += 1;
            return frontOfCardAnswers.push(multipleChoice[obj])
        };
        return null;
    });

    let backOfCardAnswers = [];
    Object.keys(correctAnswers).map(obj => {
        if (correctAnswers[obj] !== null && backOfCardAnswers.length < noOfAnswersCount) {
            return backOfCardAnswers.push(correctAnswers[obj])
        };
        return null;
    });

    const explainedAnswerResult = () => {
        if (explanation !== null && !undefined && explanation.length !== 0) {
            return explanation;
        };
    };

    return [frontOfCardAnswers, backOfCardAnswers, explainedAnswerResult];
};
