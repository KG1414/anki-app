import { useState } from 'react';
import SideBar from './SideBar/SideBar';
import MainContainer from './MainContainer/MainContainer';
import { apiClient } from '../../common/hooks/Api/apiClient';
import { useFetch } from '../../common/hooks/Api/useFetch';

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
            <MainContainer
                showCards={showCards}
                loading={loading}
                data={data}
                error={error}
            />
        </div>
    );
};

export default Layout;

