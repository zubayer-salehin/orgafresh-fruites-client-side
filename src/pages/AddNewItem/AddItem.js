import React from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import useFruites from '../Hooks/useFruites';
import Footer from '../Shared/Footer/Footer';


const AddEvent = () => {

    const [user] = useAuthState(auth);
    const [fruites] = useFruites();

    const handleAddNewItem = (e) => {
        e.preventDefault();
        const name = e.target.fruite.value
        const fruite = fruites.find(fruite => (fruite.name).toLowerCase() === name.toLowerCase())
        if (!fruite) {
            const addItemInfo = {
                userName: e.target.userName.value,
                email: e.target.email.value,
                name: e.target.fruite.value,
                price: `$${e.target.price.value}`,
                supplierName: e.target.supplier.value,
                quantity: Number(e.target.quantity.value),
                sold: 0,
                date: e.target.date.value,
                image: e.target.image.value,
                description: e.target.description.value
            }

            fetch('https://orgafresh-fruites-server-side.onrender.com/fruites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemInfo),
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your fruite has been added',
                            showConfirmButton: true,
                        })
                        e.target.reset();
                    }
                })

            fetch('https://orgafresh-fruites-server-side.onrender.com/myItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemInfo),
            })
                .then(response => response.json())
                .then(data => {
                })
        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: `${name} fruite is already exists`,
                showConfirmButton: true,
            })
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center pt-1 pb-5 mb-5'>
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "380px" }} className='my-3 px-5 py-4 rounded addItem-wrapper'>
                    <h2 className='text-center pb-2'>Add Fruite Item</h2>
                    <form className=' mt-3' onSubmit={handleAddNewItem}>
                        <input type="text" name='userName' value={user?.displayName} readOnly hidden />
                        <input type="text" name="email" value={user?.email} readOnly hidden />
                        <Row>
                            <div className='input rounded  me-4'>
                                <input style={{ width: "290px" }} type="text" name="fruite" id="name" placeholder='Fruite Name' required /><br />
                            </div>
                            <div className="input rounded ">
                                <input style={{ width: "290px" }} type="text" name="price" placeholder="Fruite Price" id="name" required /><br />
                            </div>
                        </Row>
                        <Row>
                            <div className="input rounded  me-4">
                                <input style={{ width: "290px" }} id='name' type="text" name="supplier" placeholder="Fruite Supplier Name" required /><br />
                            </div>
                            <div className="input rounded ">
                                <input style={{ width: "290px" }} id='name' type="text" name="quantity" placeholder="Fruite Quantity" required /><br />
                            </div>
                        </Row>
                        <Row>
                            <div className="input rounded  me-4">
                                <input style={{ width: "290px" }} id='name' type="date" name="date" required /><br />
                            </div>
                            <div className="input rounded ">
                                <input style={{ width: "290px" }} id='name' type="text" name="image" placeholder="Please enter Your image url" required /><br />
                            </div>
                        </Row>
                        <Row>
                            <div className='px-0 mb-3'>
                                <textarea style={{ outline: "none", border: "1px solid #e5e5e5" }} className='p-3 rounded' name="description" cols="35" rows="5" placeholder='Fuite Description Must be 25 words' required></textarea>
                            </div>
                        </Row>
                        <div className='text-center'>
                            <button className='add-item-btn border-0 mb-0 text-light py-3 fw-500 px-5 rounded'>Add New Item</button><br />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddEvent;