export const apiOne = (queryparams) => fetch(`https://quizapi.io/api/v1/questions${queryparams}`);
export const apiTwo = () => fetch(`https://quizapi.io/api/v1/questions?limit=2&apiKey=${process.env.REACT_APP_KEY}`);

//Categories
//Code
//Linux
//CMS
//SQL
//Docker
//DevOps
//Bash
//Uncategorized
//""    found an empty one