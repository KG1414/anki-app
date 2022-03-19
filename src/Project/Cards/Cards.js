import Card from './Card';

const Cards = ({ data }) => {
    const cardResult = data.map((data) => {
        const {
            id,
            category,
            question,
            answers,
            correct_answers,
            correct_answer
        } = data;
        return (
            <Card
                key={id}
                id={id}
                topic={category}
                question={question}
                multipleChoice={answers}
                correctAnswers={correct_answers}
                correctAnswer={correct_answer}
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