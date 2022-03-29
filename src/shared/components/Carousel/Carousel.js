import React, { useState } from 'react'
import './Carousel.css';

const Carousel = (props) => {
    const { children, visibleCardCount, totalElements } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (event) => {
        const touchDown = event.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (event) => {
        const touchDown = touchPosition;
        if (touchDown === null) {
            return;
        };
        const currentTouch = event.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) {
            next();
        };
        if (diff < -5) {
            prev();
        };
        setTouchPosition(null);
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };

    const next = () => {
        if (currentIndex < (totalElements - visibleCardCount)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    return (
        <div className="outer-carousel">
            <button onClick={prev} className="left-arrow"><i className="fas fa-angle-double-left fa-2x"></i></button>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        <div className={`carousel-content show-${visibleCardCount}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCardCount)}%)` }}>
                            {children}
                        </div>
                    </div>

                </div>
            </div>

            {currentIndex < (totalElements - visibleCardCount) &&
                <button onClick={next} className="right-arrow"><i className="fas fa-angle-double-right fa-2x"></i></button>}

        </div>
    );
};

export default Carousel;