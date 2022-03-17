import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to="/">App</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Home;