export const mappedCardFrontOptions = (multipleChoice) => {
    let mappedMultipleChoiceArray = [];
    for (let i = 0; i < Object.keys(multipleChoice).length; i++) {
        let indexName1 = `answer_${(i + 10).toString(36)}`;
        mappedMultipleChoiceArray.push(multipleChoice[indexName1]);
    };
    return [mappedMultipleChoiceArray];
};