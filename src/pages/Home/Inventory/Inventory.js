import { faShieldVirus, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import "./Inventory.css";

const Inventory = () => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [fruites, setFruites] = useState([]);
    const [page, setPage] = useState(0);
    const size = 6;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://orgafresh-fruites-server-side.vercel.app/fruiteCount")
            .then(res => res.json())
            .then(data => {
                const pageNumber = Math.ceil(data.count / 6)
                setPageCount(pageNumber)
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        fetch(`https://orgafresh-fruites-server-side.vercel.app/fruites?page=${page}&size=${size}`)
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


    return (
        <div id='inventory'>
            <h1 className='titleTopPadding text-center titleLine fw600'>Our Inventory</h1>
            <Container className='mb-5'>
                {loading ? <Loading loadingStatus="true"></Loading> :
                    <div className="fruiteContainer mb-5">
                        {fruites?.map(fruite => <div key={fruite?._id} className="fruite">
                            <div className='fruiteImageContainer d-flex align-items-center'>
                                <img className='fruiteImage' src={fruite.image} alt="" />
                            </div>
                            <div>
                                <h2 className='fruiteName'>{fruite.name}</h2>
                                <h3 className='fruitePrice'>R$<span className='fruiteSymbol'>{fruite.price}</span></h3>
                                <p className='fruiteMiniTitle'>SUPPLIER AND QUANTITY</p>
                                <div className='supplierAndQuantityContainer'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h6 className='supplierName'>{fruite.supplierName}</h6>
                                        <h5 className='supplierInfo'> <FontAwesomeIcon className='iconColor' icon={faTruck}></FontAwesomeIcon> Supplier</h5>
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h6 className='supplierName'>{fruite.quantity}</h6>
                                        <h5 className='supplierInfo'> <FontAwesomeIcon className='iconColor' icon={faShieldVirus}></FontAwesomeIcon> Quantity</h5>
                                    </div>
                                </div>
                                <p className='fruiteMiniTitle'>BENEFITS</p>
                                <p className='fruiteDescription'>{fruite.description.slice(0, 120) + ".."}</p>
                                <button onClick={() => navigate(`/inventory/${fruite._id}`)} className='stockUpdateBtn'>Stock Update</button>
                            </div>
                        </div>)}
                    </div>
                }
                <div className='d-block pt-3 text-center pb-5'>
                    <button id='prevNextBtn' onClick={handlePreviou} className='prevBtn'>Prev</button>
                    <div className='pagination d-inline'>
                        {[...Array(pageCount).keys()].map((number, index) => <button
                            onClick={() => setPage(number)} className={page === number ? "selected" : ""}
                            key={index}>{number + 1}</button>)}
                    </div>
                    <button onClick={handleNext} id='prevNextBtn' className='nextBtn'>Next</button>
                </div>
            </Container>
        </div>
    )
};

export default Inventory;