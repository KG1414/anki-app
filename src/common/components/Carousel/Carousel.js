import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        setCurrentIndex(0);
    }, [children]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={`carousel-content show-${visibleCardCount}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCardCount)}%)` }}>
                        {children}
                    </div>
                </div>
            </div>
            <div className="carousel__button-container">
                <button onClick={prev} className="left-arrow-button"><i style={{ color: "grey" }} className="fas fa-angle-double-left fa-1x"></i></button>
                {
                    currentIndex < (totalElements - visibleCardCount) &&
                    <button onClick={next} className="right-arrow-button"><i style={{ color: "grey" }} className="fas fa-angle-double-right fa-1x"></i></button>
                }
            </div>
        </div>
    );
};

export default Carousel;