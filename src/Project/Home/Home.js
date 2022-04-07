import React from 'react';
import NavBar from '../../common/components/NavBar/NavBar';
import Footer from '../../common/components/Footer/Footer';
import Typewriter from 'typewriter-effect';
import './Home.css';
import iphone from '../../images/Untitled design.png';

const Home = () => {
    return (
        <div className="home__section-wrapper">
            <section id="home-section" className="home-section">
                <NavBar />
                <div className="row title-row container-fluid">
                    <div className="col col-lg-6 col-md-12 no-break">

                        <h1 className="big-heading"><Typewriter
                            options={{
                                delay: 75,
                                deleteSpeed: 1
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString("Learn. ")
                                    .pauseFor(500)
                                    .typeString("Retain.")
                                    .pauseFor(500)
                                    .typeString("<br />")
                                    .pauseFor(500)
                                    .typeString("Reach your full")
                                    .pauseFor(200)
                                    .typeString(" ")
                                    .pauseFor(800)
                                    .typeString("potential.")
                                    .start()
                            }}
                        /></h1>

                        <div className="title-buttons">
                            <button type="button" className="btn1 btn btn-primary btn-md download-button"><span className="fab fa-apple"></span> Download</button>
                            <button type="button" className="btn btn-outline-primary btn-md download-button"><i className="fab fa-google-play"></i> Download</button>
                        </div>
                    </div>

                    <div className="title-image-div col-lg-6 col-md-12 no-break">
                        <img className="title-image" src={iphone} alt="iphone-mockup"></img>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
};

export default Home;