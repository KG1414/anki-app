import CardFactory from './CardFactory/CardFactory';

const Cards = ({ data, loading }) => {

    let cardResult = <p>Nothing is here...</p>

    if (loading) {
        cardResult = <p>...loading</p>
    };

    if (data && !loading) {
        cardResult = data.map((data) => {
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
    };

    return (
        <div className="cards">{cardResult}</div>
    );
};

export default Cards;