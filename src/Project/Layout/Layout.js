import { useState } from 'react';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { useFetch, useFetchOnLoad } from '../../shared/utils/Api/useFetch';
import { apiOne, apiTwo } from '../../shared/utils/Api/apiClient';

const Layout = () => {
    const [show, setShow] = useState(false);
    const getTopicApi = useFetch(apiOne);
    const getTopicApiTwo = useFetchOnLoad(apiTwo);

    const displayDataHandler = () => {
        const topicApiQueryParams = `?limit=5&apiKey=${process.env.REACT_APP_KEY}`;
        getTopicApi.getData(topicApiQueryParams);
        setShow(prevValue => !prevValue);
    };

    let courseData = (
        <div style={{ display: "flex", marginLeft: "10%", paddingLeft: "2rem" }}>
            <h2>First Data Set</h2>
            <pre>{JSON.stringify(getTopicApi.data, null, 2)}</pre>
        </div>
    );
    if (getTopicApi.loading) {
        courseData = <p>Loading...</p>
    };
    if (getTopicApi.error) {
        courseData = <p>An error occured</p>
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>Layout</h1>
                <div>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <Cards data={getTopicApi.data} />
            <button onClick={displayDataHandler}>Show data</button>
            <h1>Second Data Set</h1>
            <pre>{JSON.stringify(getTopicApiTwo.data, null, 2)}</pre>
            {show ? courseData : <p>No Data</p>}
        </div>
    );
};

export default Layout;