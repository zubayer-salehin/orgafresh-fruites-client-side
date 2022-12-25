import { faCircleCheck, faShieldVirus, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./FruiteDeliver&Restock.css";
import { Button, Form, Modal } from 'react-bootstrap';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import Footer from "../Shared/Footer/Footer"

const FruiteDetail = () => {

    const { id } = useParams();
    const [fruite, setFruite] = useState({});
    const [updateQuantity, setUpdateQuantity] = useState(0);
    const [show, setShow] = useState(false);
    const [addQuantity, setAddQuantity] = useState(0);
    const [getInputUpdateQuantity, setGetInputUpdateQuantity] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch(`https://orgafresh-fruites-server-side.onrender.com/fruites/${id}`)
            .then(res => res.json())
            .then(data => {
                setFruite(data)
                setLoading(false);
            })
    }, [id, updateQuantity, getInputUpdateQuantity])


    const handleDelivered = (email, name) => {

        const quantityDecrease = fruite.quantity - 1
        const soldIncrease = fruite.sold + 1
        const user = {
            quantity: quantityDecrease,
            sold: soldIncrease
        }
        fetch(`https://orgafresh-fruites-server-side.onrender.com/fruites/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                setUpdateQuantity(updateQuantity + 1);
            })

        fetch(`https://orgafresh-fruites-server-side.onrender.com/myItem?email=${email}&name=${name}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    const handleClose = () => {
        setShow(false)
    };

    const handleQuantity = (email, name) => {

        if (addQuantity) {

            const totalQuantity = fruite.quantity + Number(addQuantity)
            const user = {
                quantity: totalQuantity,
                sold: fruite.sold
            }

            fetch(`https://orgafresh-fruites-server-side.onrender.com/fruites/${id}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setGetInputUpdateQuantity(totalQuantity + 1);
                })

            fetch(`https://orgafresh-fruites-server-side.onrender.com/myItem?email=${email}&name=${name}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(data => {

                })

            handleClose()
        } else {
            toast.warn("please enter a quantity number");
        }
    }

    const handleShow = () => setShow(true);


    return (loading ? <Loading loadingStatus="true"></Loading> :
        <>
            <div className='fruite-container'>
                <div className="fruite-wrapper">
                    <div className="fruiteDeliverRestockImage">
                        <img src={fruite.image} alt="" />
                    </div>
                    <div className="fruite-info">
                        <div className='mt-3 fruite-text-color'>
                            <small>Id : {fruite._id}</small>
                        </div>
                        <h2 className='fruite-title-color mt-1'>{fruite.name}</h2>
                        <h2 className='fruite-price'><span className='fs-6 me-2'>Rs</span>{fruite.price}</h2>
                        <div className='mt-3 mb-3 fruite-text-color'>
                            <small>SUPPLY & QUANTITY & SOLD :</small>
                        </div>
                        <div className='row m-0 mb-3 g-0 text-center'>
                            <div className="col supplier-name">
                                <h6>{fruite.supplierName}</h6>
                                <h5><FontAwesomeIcon className='fruite-icon' icon={faTruck} />Supplier</h5>
                            </div>
                            <div className="col quantity">
                                <h6>{fruite.quantity}</h6>
                                <h5><FontAwesomeIcon className='fruite-icon' icon={faShieldVirus} />Quantity</h5>
                            </div>
                            <div className="col sold">
                                <h6>{fruite.sold}</h6>
                                <h5><FontAwesomeIcon className='fruite-icon' icon={faCircleCheck}></FontAwesomeIcon>Sold</h5>
                            </div>
                        </div>
                        <div className='mt-3 fruite-text-color'>
                            <small>DESCRIPTION : </small>
                        </div>
                        <p className='mt-1'>{fruite.description + "."}</p>
                        <button onClick={() => handleDelivered(fruite.email, fruite.name)} className='button delivered mb-4 me-5' type='button'>Delivered</button>
                        <div className='d-inline'>
                            <button onClick={handleShow} className='delivered restock bg-success' type='button'>Restock</button>

                            <Modal size='sm' show={show} onHide={handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Restock {fruite.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                type="text"
                                                placeholder={`${fruite.name} Quantity`}
                                                autoFocus
                                                onChange={(e) => setAddQuantity(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={() => handleQuantity(fruite.email, fruite.name)}>
                                        Update Quantity
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};


export default FruiteDetail;