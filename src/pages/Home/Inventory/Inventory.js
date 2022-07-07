import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import "./Inventory.css";
import { useQuery } from 'react-query';

const Inventory = () => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 6;

    useEffect(() => {
        fetch("https://immense-tundra-86422.herokuapp.com/fruiteCount")
            .then(res => res.json())
            .then(data => {
                const pageNumber = Math.ceil(data.count / 6)
                setPageCount(pageNumber)
            })
    }, [])

    const { data: fruites, isLoading, refetch } = useQuery([page, size], () => fetch(`https://immense-tundra-86422.herokuapp.com/fruites?page=${page}&size=${size}`)
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }



    const handlePreviou = () => {
        if (page > 0) {
            setPage(page - 1);
            refetch();
        }
    }

    const handleNext = () => {
        if (page < (pageCount - 1)) {
            setPage(page + 1);
            refetch();
        }
    }


    return (
        <div id='Inventory'>
            <h1 className='my-5 pt-3 pb-1 text-center'>Our Inventory</h1>
            <Container className='mb-4'>
                <div className="inventory-container mb-5">
                    {fruites?.map(product => <Product key={Math.random() * 10000} product={product}></Product>)}
                </div>
                <div className='d-block pt-3 text-center'>
                    <button id='prevNextBtn' onClick={handlePreviou} className='prevBtn'>Prev</button>
                    <div className='pagination d-inline'>
                        {[...Array(pageCount).keys()].map((number,index) => <button
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
    );
};

export default Inventory;