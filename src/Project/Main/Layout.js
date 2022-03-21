import { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main';
import { useFetch } from '../../shared/utils/hooks/Api/useFetch';
import { apiOne } from '../../shared/utils/hooks/Api/apiClient';

import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../App/firebase-config';

const topicApiQueryParams = `?limit=5&apiKey=${process.env.REACT_APP_KEY}`;

const Layout = () => {
    const getTopicApi = useFetch(apiOne);
    const [show, setShow] = useState(false);
    const [allTopicData, setallTopicData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getTopicApi.getData(topicApiQueryParams, { signal }); // Retrieving data from API
        const queryCollection = query(collection(db, 'topics'), orderBy('created', 'desc'));
        onSnapshot(queryCollection, (querySnapshot) => {
            setallTopicData(querySnapshot.docs.map(doc => (
                doc.data()
            )));
        });
        return () => (
            controller.abort()
        );
    }, []);

    const createDataHandler = async (e) => { // Getting Topic data from Database that was originally sent from API
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
        <>
            <SideBar />
            <Main
                show={show}
                courseData={courseData}
                allTopicData={allTopicData}
                createDataHandler={createDataHandler}
            />
        </>
    );
};

export default Layout;