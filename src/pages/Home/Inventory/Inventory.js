import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import "./Inventory.css";

const Inventory = () => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [fruites, setFruites] = useState([]);
    const [page, setPage] = useState(0);
    const size = 6;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://sleepy-waters-32923.herokuapp.com/fruiteCount")
            .then(res => res.json())
            .then(data => {
                const pageNumber = Math.ceil(data.count / 6)
                setPageCount(pageNumber)
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        fetch(`https://sleepy-waters-32923.herokuapp.com/fruites?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFruites(data)
                setLoading(false);
            })
    }, [page, size])

    const handlePreviou = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const handleNext = () => {
        if (page < (pageCount - 1)) {
            setPage(page + 1);
        }
    }


    return loading ? <Loading loadingStatus="true"></Loading> :
        <div id='Inventory'>
            <h1 className='my-5 pt-3 pb-1 text-center'>Our Inventory</h1>
            <Container className='mb-4'>
                <div className="inventory-container mb-5">
                    {fruites?.map(product => <Product key={Math.random() * 10000} product={product}></Product>)}
                </div>
                <div className='d-block pt-3 text-center'>
                    <button id='prevNextBtn' onClick={handlePreviou} className='prevBtn'>Prev</button>
                    <div className='pagination d-inline'>
                        {[...Array(pageCount).keys()].map((number, index) => <button
                            onClick={() => setPage(number)} className={page === number ? "selected" : ""}
                            key={index}>{number + 1}</button>)}
                    </div>
                    <button onClick={handleNext} id='prevNextBtn' className='nextBtn'>Next</button>
                </div>
            </Container>
            <div className="text-center pt-4">
                <button onClick={() => navigate("/manageItem")} type='button' className='invetoryBtn py-3 px-5 fs-5'>Manage Inventories</button>
            </div>
        </div>
};

export default Inventory;