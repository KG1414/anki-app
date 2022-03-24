import { useState } from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main';
import { apiClient } from '../../shared/hooks/Api/apiClient';
import { useFetch } from '../../shared/hooks/Api/useFetch';

const Layout = () => {
    const { getData, error, loading, data } = useFetch();
    const [showCards, setShowCards] = useState(false);

    const createDataHandler = async (e, topic) => {
        e.preventDefault();
        apiClient(topic, getData);
        setShowCards(true);
    };

    return (
        <div>
            <SideBar createDataHandler={createDataHandler} />
            <Main
                showCards={showCards}
                loading={loading}
                data={data}
            />
        </div>
    );
};

export default Layout;

