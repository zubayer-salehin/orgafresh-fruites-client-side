import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import GoogleMap from '../GoogleMap/GoogleMap';
import Inventory from '../Inventory/Inventory';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventory></Inventory>
           <Works></Works>
           <GoogleMap></GoogleMap>
           <Footer></Footer>
        </div>
    );
};

export default Home;