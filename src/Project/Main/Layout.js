import { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main';
import { useFetch } from '../../shared/hooks/Api/useFetch';
import { apiOne } from '../../shared/hooks/Api/apiClient'; //Api Handler

//Firebase
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../App/firebase-config';

const topicApiQueryParams = `?limit=5&apiKey=${process.env.REACT_APP_KEY}`;

const Layout = () => {
    const [showCards, setShowCards] = useState(false);
    const [allTopicData, setallTopicData] = useState([]);
    const [isSideBarClosed, setIsSideBarClosed] = useState(false);

    const getTopicApi = useFetch(apiOne);

    useEffect(() => {
        getTopicApi.getData(topicApiQueryParams); //get data from API

        const queryCollection = query(collection(db, 'topics'), orderBy('created', 'desc')); //get data from Database
        const unsub = onSnapshot(queryCollection, (querySnapshot) => {
            if (querySnapshot.docs !== null) {
                setallTopicData(querySnapshot.docs.map(doc => (
                    doc.data()
                )));
            } else {
                setallTopicData([]);
                throw console.error("error");
            };

            return () => unsub();
        });
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
        setIsSideBarClosed(prevValue => !prevValue);
    };

    let courseData = (
        <div style={{ display: "flex", marginLeft: "10%", paddingLeft: "2rem" }}>
            <h2>First Data Set</h2>
            <pre>{JSON.stringify(allTopicData[0], null, 2)}</pre>
        </div>
    );

    return (
        <>
            <SideBar createDataHandler={createDataHandler} sideBarToggler={sideBarToggler} isSideBar={isSideBarClosed} />
            <Main
                showCards={showCards}
                courseData={courseData}
                allTopicData={allTopicData}
                createDataHandler={createDataHandler}
                sideBarToggler={sideBarToggler}
                isSideBar={isSideBarClosed}
            />
        </>
    );
};

export default Layout;