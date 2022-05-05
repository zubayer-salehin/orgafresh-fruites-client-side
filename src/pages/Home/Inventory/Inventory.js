import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFruites from '../../Hooks/useFruites';
import Product from '../Product/Product';
import "./Inventory.css";

const Inventory = () => {
    const [fruites] = useFruites(["hello","nice","top"]);
    const navigate = useNavigate();

    return (
        <div id='Inventory'>
            <h1 className='my-5 pt-3 pb-1 text-center'>Our Inventory</h1>
            <Container className='mb-5'>
                <div className="inventory-container">
                    {fruites.map(product => <Product key={Math.random() * 10000} product={product}></Product>)}
                </div>
            </Container>
            <div className="text-center pt-4">
                <button onClick={() => navigate("/manageItem")} type='button' className='button py-3 px-5 fs-5'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Inventory;