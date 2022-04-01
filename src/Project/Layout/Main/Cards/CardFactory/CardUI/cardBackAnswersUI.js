export const cardBackAnswersUI = (mappedBackCardAnswers) => {
    var num = 1;
    const cardAnswersList = mappedBackCardAnswers.map((res, index) => {
        if (res !== null) {
            return <li key={index}>{num++}. {res}</li>
        };
        return res;
    });
    return [cardAnswersList];
};
