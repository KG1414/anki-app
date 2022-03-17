import React from 'react';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { useFetch } from '../../shared/utils/Api/useFetch';

//Categories
//Code
//Linux
//CMS
//SQL
//Docker
//DevOps
//""    found an empty one
const url = `https://quizapi.io/api/v1/questions?category=Code&limit=20&apiKey=${process.env.REACT_APP_KEY}`;

const Layout = () => {
    const { data, error, loading } = useFetch(url);

    return (
        <div>
            <h1>Layout</h1>
            <Cards />
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>

            {/* Testing purposes */}
            <div style={{ display: "flex", justifyContent: "center", paddingLeft: "2rem" }}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Layout;