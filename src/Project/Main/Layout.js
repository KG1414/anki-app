import { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main';
import { useFetch } from '../../shared/utils/hooks/Api/useFetch';
import { apiOne } from '../../shared/utils/hooks/Api/apiClient'; //Api Handler

//Firebase
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../App/firebase-config';

const topicApiQueryParams = `?limit=5&apiKey=${process.env.REACT_APP_KEY}`;

const Layout = () => {
    const [showCards, setShowCards] = useState(false);
    const [allTopicData, setallTopicData] = useState([]);
    const [isSideBar, setIsSideBar] = useState(false);

    const getTopicApi = useFetch(apiOne);

    useEffect(() => {
        const controller = new AbortController();

        getTopicApi.getData(topicApiQueryParams); //get data from API

        const queryCollection = query(collection(db, 'topics'), orderBy('created', 'desc')); //get data from Database
        onSnapshot(queryCollection, (querySnapshot) => {
            setallTopicData(querySnapshot.docs.map(doc => (
                doc.data()
            )));
        });
        return () => (
            controller.abort()
        );
    }, []);

    const createDataHandler = async (e, collectionName) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, collectionName), { //Send data to Database
                results: getTopicApi.data,
                created: Timestamp.now()
            })
        } catch (err) {
            alert(err)
        };
        setShowCards(true);
    };

    const sideBarToggler = () => {
        setIsSideBar(prevValue => !prevValue);
    };

    let courseData = (
        <div style={{ display: "flex", marginLeft: "10%", paddingLeft: "2rem" }}>
            <h2>First Data Set</h2>
            <pre>{JSON.stringify(allTopicData[0], null, 2)}</pre>
        </div>
    );

    return (
        <>
            <SideBar createDataHandler={createDataHandler} sideBarToggler={sideBarToggler} isSideBar={isSideBar} />
            <Main
                showCards={showCards}
                courseData={courseData}
                allTopicData={allTopicData}
                createDataHandler={createDataHandler}
                sideBarToggler={sideBarToggler}
                isSideBar={isSideBar}
            />
        </>
    );
};

export default Layout;