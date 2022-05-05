import React from 'react';
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
        </div>
    );
};

export default Home;