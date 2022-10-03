import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faThumbsUp, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import "./Works.css"


const Works = () => {
    return (
        <div>
            <h1 className='titleTopPadding text-center titleLine fw600'>How We Operate</h1>
            <Container>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 text-center">
                    <div className="col ">
                        <div className='works_icon'>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <h4 className=''>YOU PLACE YOUR ORDER</h4>
                        <p className='mb-0'>Place your order via voicemail or via our App Ordering System before 2am, to receive same day delivery.</p>
                    </div>
                    <div className="col ">
                        <div className='works_icon'>
                            <FontAwesomeIcon icon={faTruckArrowRight} />
                        </div>
                        <h4 className=''>WE PICK, PACK & DELIVER</h4>
                        <p className='mb-0'>We pick, pack & deliver your order on time in modern, refrigerated delivery vehicles with GPS tracking.</p>
                    </div>
                    <div className="col ">
                        <div className='works_icon'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <h4 className=''>SAME DAY REPLACEMENT</h4>
                        <p className='mb-0'>If there’s something that you’re not satisfied with, we’ll replace it on the same day or issue you a credit.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Works;