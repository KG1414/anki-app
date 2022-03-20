import CardConstructor from './Card/CardConstructor';

const Cards = ({ data }) => {
    const cardResult = data.map((data) => {
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
            <CardConstructor
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
        <div>
            {cardResult}
        </div>
    );
};

export default Cards;