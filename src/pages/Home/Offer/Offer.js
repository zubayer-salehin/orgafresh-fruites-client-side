import React from 'react';
import { Container } from 'react-bootstrap';
import "./Offer.css";
import Countdown, { zeroPad } from 'react-countdown';
import image1 from "../../../images/Offer/3-1-370x463.jpg"
import image2 from "../../../images/Offer/13-370x463.jpg"
import image3 from "../../../images/Offer/6-2-370x463.jpg"
import image4 from "../../../images/Offer/8-370x463.jpg"

const Offer = () => {

    // Random component
    const Completionist = () => <span>Offer Was Finished !</span>;

    // Render
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className='d-flex justify-content-center'>
                <div className='timeMainContainer'>
                    <div className='timeContainer'>
                        <span className='timeDegine'>{zeroPad(days)}</span><br />
                        <span className='timeTextDegine'>DAYS</span>
                    </div>
                    <div className='timeContainer'>
                        <span className='timeDegine'>{zeroPad(hours)}</span><br />
                        <span className='timeTextDegine'>HOUS</span>
                    </div>
                    <div className='timeContainer'>
                        <span className='timeDegine'>{zeroPad(minutes)}</span><br />
                        <span className='timeTextDegine'>MINS</span>
                    </div>
                    <div className='timeContainer'>
                        <span className='timeDegine'>{zeroPad(seconds)}</span><br />
                        <span className='timeTextDegine'>SECS</span>
                    </div>
                </div>
            </div>;
        }
    };


    return (
        <div className='offer'>
            <h2 className='fs-1 fw500 text-center text-light titlePadding'>Deal Of The Day</h2>
            <p className='timeDescription'>Orgafresh fresh fruites Deals Promotion. Offer Valid form 5th october to 7th December<br /> Offer valid at all Orgafresh Hypermarkets across UAE.</p>
            <Countdown date={Date.now() + 6566400000} renderer={renderer} />

            <Container className="offerFoodPadddingTop">
                <div className='foodMunuContainer'>
                    <div className='item-container'>
                        <img src={image4} alt="" />
                        <span className="position-absolute badge rounded-0 start-0 offerBadge">Hot</span>
                        <div className='item-information'>
                            <h5>Amea Graps</h5>
                            <span className='item-information-price-color'>$150.00</span>
                        </div>
                    </div>
                    <div className='item-container' >
                        <img src={image2} alt="" />
                        <span className="position-absolute badge rounded-0 start-0 offerBadge">Hot</span>
                        <div className='item-information'>
                            <h5>Bulbous Vio</h5>
                            <span className='item-information-price-color'>$145.00</span>
                        </div>
                    </div>
                    <div className='item-container'>
                        <img src={image3} alt="" />
                        <span className="position-absolute badge rounded-0 start-0 offerBadge">Hot</span>
                        <div className='item-information'>
                            <h5>Onion Frabe</h5>
                            <span className='item-information-price-color'>$130.00</span>
                        </div>
                    </div>
                    <div className='item-container'>
                        <img src={image1} alt="" />
                        <span className="position-absolute badge rounded-0 end-0 offerBadge specialOfferBadgeColor">-14%</span>
                        <div className='item-information'>
                            <h5>Roasted Corn</h5>
                            <span className='item-information-price-color'>$180.00</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default Offer;