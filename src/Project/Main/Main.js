import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { useFetch } from '../../shared/utils/hooks/Api/useFetch';
import { apiOne } from '../../shared/utils/hooks/Api/apiClient';

import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../App/firebase-config';

const topicApiQueryParams = `?limit=5&apiKey=${process.env.REACT_APP_KEY}`;

const Main = () => {
    const getTopicApi = useFetch(apiOne);
    const [show, setShow] = useState(false);
    const [allTopicData, setallTopicData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getTopicApi.getData(topicApiQueryParams, { signal });
        const queryCollection = query(collection(db, 'topics'), orderBy('created', 'desc'))
        onSnapshot(queryCollection, (querySnapshot) => {
            setallTopicData(querySnapshot.docs.map(doc => (
                doc.data()
            )));
        });
        return () => (
            controller.abort()
        );
    }, []);

    const createDataHandler = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'topics'), {
                results: getTopicApi.data,
                created: Timestamp.now()
            })
        } catch (err) {
            alert(err)
        };
        setShow(prevValue => !prevValue);
    };

    let courseData = (
        <div style={{ display: "flex", marginLeft: "10%", paddingLeft: "2rem" }}>
            <h2>First Data Set</h2>
            <pre>{JSON.stringify(allTopicData[0], null, 2)}</pre>
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

            <button onClick={createDataHandler}>Pull data</button>
            {show && <Cards data={allTopicData[0]} show={show} />}
            {show ? courseData : <p>No Data</p>}
        </div>
    );
};

export default Main;