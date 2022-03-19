import Card from "./Card/Card";

const Cards = ({ data }) => {
    const cardResult = data.map((data) => {
        const allResults = { ...data }; //copied state
        const {
            id,
            category,
            question,
            answers,
            correct_answers,
            correct_answer
        } = allResults;
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