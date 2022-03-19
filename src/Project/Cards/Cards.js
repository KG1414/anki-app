import Card from './Card';

const Cards = ({ data }) => {

    const cardResult = data.map((data) => (
        <Card key={data.id} id={data.id} topic={data.category} question={data.question} multipleChoice={data.answers} />
    ));

    // const possibleAnswers = [];

    // if (Object.keys(data).length !== 0) {
    //     var id = data[0].id;
    //     var topic = data[0].category;
    //     var question = data[0].question;
    //     var answers = data[0].answers;
    // };
    // possibleAnswers.push(answers);
    // if (Object.keys(possibleAnswers).length !== 0) {
    //     var firstQuestion = possibleAnswers;
    // }

    // const allQues = possibleAnswers.map((value, index) => {
    //     return value;
    // });
    // console.log("All Answers", allQues[0]);
    // console.log("Specific answer: ", allQues[0]?.answer_a);

    // var cardResult = <Card key={id} id={id} topic={topic} question={question} multipleChoice={allQues} />;

    return (
        <>
            {cardResult}
        </>
    );
};

export default Cards;