import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error</h1>
            <h2>This page doesn't exist / can't be found.</h2>
            <Link to="/"><button>Back to App</button></Link>
        </div>
    );
};

export default ErrorPage;