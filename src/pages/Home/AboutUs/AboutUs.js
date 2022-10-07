import React from 'react';
import "./AboutUs.css";
import Image from "../../../images/AboutUs/top-view-tasty-sliced-fruits-with-fresh-berries-fruits-dark-background-min.jpg";
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
                        <p className='aboutUsDescription pt-3 pb-4'>Fresh produce means fruits that have not been processed in any manner. This term does not include such items as nuts, popcorn, vegetable plants, dried beans, grains, and flowers.</p>
                        <div className='row g-4 g-sm-5'>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image1} alt="" />
                                </div>
                                <div>
                                    <h5>100% Organic</h5>
                                    <p className='aboutUsDesc'>Organic foods are not healthier per se, in terms of nutrients.</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image3} alt="" />
                                </div>
                                <div>
                                    <h5>100% Fresh</h5>
                                    <p className='aboutUsDesc'>Fresh grown produce has lower levels of pesticide residue.</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image2} alt="" />
                                </div>
                                <div>
                                    <h5>Easy Buy</h5>
                                    <p className='aboutUsDesc'>Order grocery and food online with same-day home delivery.</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 d-flex flexGap'>
                                <div style={{ width: "57px" }}>
                                    <img width="100%" src={image4} alt="" />
                                </div>
                                <div>
                                    <h5>Care For You</h5>
                                    <p className='aboutUsDesc'>Never give from the depth of your well, but from your overflom.</p>
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