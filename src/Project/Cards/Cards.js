import Card from './Card';

const Cards = ({ data }) => {
    const cardResult = data.map((data) => {
        const {
            id,
            category,
            question,
            answers,
            correct_answers } = data;
        return (
            <Card key={id} id={id} topic={category} question={question} multipleChoice={answers} correctAnswers={correct_answers} />
        )
    });

    return (
        <div>
            {cardResult}
        </div>
    );
};

export default Cards;