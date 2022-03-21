import CardFactory from './Card/ui/CardFactory';

const Cards = ({ data, show }) => {
    console.log("data", data.results);
    const cardResult = data.results.map((data) => {
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
            />
        );
    });
    return (
        <div>{cardResult}</div>
    );
};

export default Cards;