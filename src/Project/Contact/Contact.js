import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form/Form';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <Form />
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/">App</Link>
            </div>
        </div>
    );
};

export default Contact;