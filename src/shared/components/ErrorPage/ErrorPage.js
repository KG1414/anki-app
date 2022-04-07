import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error__page-wrapper">
            <h1>Error</h1>
            <h3 className="hero-subtitle"><Typewriter
                options={{
                    delay: 75,
                    deleteSpeed: 1
                }}
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("404, there seems to be a problem....")
                        .pauseFor(1000)
                        .deleteChars(31)
                        .typeString("page not found.")
                        .pauseFor(1000)
                        .start()
                }}
            /></h3>
            <Link to="/"><button type="button" class="btn btn-light btn-sm">return to app</button></Link>
        </div>
    );
};

export default ErrorPage;