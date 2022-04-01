export const mappedCardBackOptions = (noOfAnswersCount, correctAnswers) => {
    let mappedBackCardAnswers = [];
    for (let i = 0; i < noOfAnswersCount; i++) {
        let indexName = `answer_${(i + 10).toString(36)}_correct`;
        mappedBackCardAnswers.push(correctAnswers[indexName]);
    };
    return [mappedBackCardAnswers];
};
