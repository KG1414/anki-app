import CardFactory from './CardFactory/CardFactory';
import './Cards.css';
import { ringLoader } from '../../shared/components/Spinners/Spinners';

const Cards = ({ data, loading, error }) => {
    let cardResult = <div className="anki__cards-error"><h3>Nothing is here.</h3></div>;

    if (loading) {
        cardResult = <div className="anki__cards">{ringLoader(loading)}</div>
    };

    if (!loading && !data && error) {
        cardResult = <div className="anki__cards-error"><h3>An unexpected error occured.</h3></div>
        console.error(error);
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
        <div style={{ marginTop: "10%" }}>
            {cardResult}
        </div>
    );
};

export default Cards;