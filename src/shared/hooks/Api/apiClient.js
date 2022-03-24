export const apiClient = (topic, getData) => {
    const baseUrl = 'https://quizapi.io/api/v1/questions';

    switch (topic) {
        case "Code":
            getData(`${baseUrl}?category=code&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "Linux":
            getData(`${baseUrl}?category=linux&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "CMS":
            getData(`${baseUrl}?category=cms&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "SQL":
            getData(`${baseUrl}?category=sql&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "Docker":
            getData(`${baseUrl}?category=docker&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "DevOps":
            getData(`${baseUrl}?category=devops&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "Bash":
            getData(`${baseUrl}?category=bash&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        case "Uncategorized":
            getData(`${baseUrl}?category=uncategorized&limit=10&apiKey=${process.env.REACT_APP_KEY}`);
            break;
        default:
            break;
    };
};

