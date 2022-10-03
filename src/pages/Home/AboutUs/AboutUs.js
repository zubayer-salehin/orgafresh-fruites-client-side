import React from 'react';
import "./AboutUs.css";
import Image from "../../../images/AboutUs/top-view-tasty-sliced-fruits-with-fresh-berries-fruits-dark-background.jpg";
import image1 from "../../../images/AboutUs/sec1.png"
import image2 from "../../../images/AboutUs/sec2.png"
import image3 from "../../../images/AboutUs/sec3.png"
import image4 from "../../../images/AboutUs/sec4.png"

const AboutUs = () => {
    return (
        <div id='about-us'>
            <h1 className='text-center titleTopPadding titleLine fw600'>About us</h1>
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-sm-5">
                        <img className='aboutUsImage' src={Image} alt="" />
                    </div>
                    <div className="col-12 col-sm-7">
                        <h2 className='aboutUsTitle'>Welcome to orgafresh</h2>
                        <p className='aboutUsDescription pt-3 pb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, quo facilis. Aut maxime reprehenderit cum vero, voluptatem distinctio dolor quaerat rem ipsa earum blanditiis adipisci.</p>
                        <div className='row g-4 g-sm-5'>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image1} alt="" />
                                </div>
                                <div>
                                    <h5>100% Organic</h5>
                                    <p className='aboutUsDesc'>Lorem ipsum dolor sit amet, <br /> consectetur adi</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image3} alt="" />
                                </div>
                                <div>
                                    <h5>100% Fresh</h5>
                                    <p className='aboutUsDesc'>Lorem ipsum dolor sit amet, <br /> consectetur adi</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image2} alt="" />
                                </div>
                                <div>
                                    <h5>Easy Buy</h5>
                                    <p className='aboutUsDesc'>Lorem ipsum dolor sit amet, <br /> consectetur adi</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image4} alt="" />
                                </div>
                                <div>
                                    <h5>Care For You</h5>
                                    <p className='aboutUsDesc'>Lorem ipsum dolor sit amet, <br /> consectetur adi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;