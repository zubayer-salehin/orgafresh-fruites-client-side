import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ocsolutions.co.in/html/organic_food/images/header3/slider.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ocsolutions.co.in/html/organic_food/images/header3/slider.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ocsolutions.co.in/html/organic_food/images/header3/slider.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;