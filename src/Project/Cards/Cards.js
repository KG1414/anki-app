import CardFactory from './CardFactory/CardFactory';

const Cards = ({ data }) => {
    const cardResult = data[0].results.map((data) => {
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
        <div className="cards">{cardResult}</div>
    );
};

export default Cards;