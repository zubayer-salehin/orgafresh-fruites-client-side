import React from 'react';
import Banner from '../Banner/Banner';
import GoogleMap from '../GoogleMap/GoogleMap';
import Inventory from '../Inventory/Inventory';
import Works from '../Works/Works';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';
import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Inventory></Inventory>
            <Offer></Offer>
            <Works></Works>
            <Testimonial></Testimonial>
            <GoogleMap></GoogleMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;