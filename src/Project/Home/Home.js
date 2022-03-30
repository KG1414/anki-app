import React from 'react';
import NavBar from '../../shared/components/NavBar/NavBar';
import './Home.css';
import iphone from '../../images/Untitled design.png';

const Home = () => {
    return (
        <section id="home-section" className="home-section">
            <NavBar />
            <div className="row title-row container-fluid">

                <div className="col col-lg-6 col-md-12 no-break">
                    <h1 className="big-heading">Learn to retain information to your full potential.</h1>
                    <div className="title-buttons">
                        <button type="button" className="btn1 btn btn-primary btn-lg download-button"><span className="fab fa-apple"></span> Download</button>
                        <button type="button" className="btn btn-outline-primary btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
                    </div>
                </div>

                <div className="title-image-div col-lg-6 col-md-12 no-break">
                    <img className="title-image" src={iphone} alt="iphone-mockup"></img>
                </div>

            </div>
        </section>
    );
};

export default Home;