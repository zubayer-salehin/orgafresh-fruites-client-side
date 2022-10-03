import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";
import slideImage1 from "../../../images/Slider-Images/slider-1.jpg";
import slideImage2 from "../../../images/Slider-Images/slider-2.jpg";
import slideImage3 from "../../../images/Slider-Images/slider-3.jpg";

const Banner = () => {
    return (
        <div className="banner">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImage1}
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3 className='sliderTitle'>fast and testy</h3>
                        <p className='sliderDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi <br /> culpa eius adipisci omnis doloremque itaque.</p>
                        <button type='button' className='sliderButton'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImage2}
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3 className='sliderTitle'>organic testy</h3>
                        <p className='sliderDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi <br /> culpa eius adipisci omnis doloremque itaque.</p>
                        <button type='button' className='sliderButton'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImage3}
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className='sliderTitle'>sale up 50%</h3>
                        <p className='sliderDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi <br /> culpa eius adipisci omnis doloremque itaque.</p>
                        <button type='button' className='sliderButton'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;