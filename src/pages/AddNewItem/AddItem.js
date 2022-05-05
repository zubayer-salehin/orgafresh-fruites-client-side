import React from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useFruites from '../Hooks/useFruites';



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
            console.log(addItemInfo);

            fetch('https://immense-tundra-86422.herokuapp.com/fruites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemInfo),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

            fetch('https://immense-tundra-86422.herokuapp.com/myItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addItemInfo),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
        } else {
            alert("Fruite is already exesist");
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className='my-4 px-5 py-4 rounded'>
                <h2 className='text-center pb-2'>Add Fruite Item</h2>
                <form className=' mt-3' onSubmit={handleAddNewItem}>
                    <input type="text" name='userName' value={user?.displayName} readOnly hidden />
                    <input type="text" name="email" value={user?.email} readOnly hidden />
                    <Row>
                        <div className='input rounded col me-4'>
                            <input style={{ width: "263px" }} type="text" name="fruite" id="name" placeholder='Fruite Name' required /><br />
                        </div>
                        <div className="input rounded col">
                            <input style={{ width: "263px" }} type="text" name="price" placeholder="Fruite Price" id="name" required /><br />
                        </div>
                    </Row>
                    <Row>
                        <div className="input rounded col me-4">
                            <input style={{ width: "263px" }} id='name' type="text" name="supplier" placeholder="Fruite Supplier Name" required /><br />
                        </div>
                        <div className="input rounded col">
                            <input style={{ width: "263px" }} id='name' type="text" name="quantity" placeholder="Fruite Quantity" required /><br />
                        </div>
                    </Row>
                    <Row>
                        <div className="input rounded col me-4">
                            <input style={{ width: "263px" }} id='name' type="date" name="date" required /><br />
                        </div>
                        <div className="input rounded col">
                            <input style={{ width: "263px" }} id='name' type="text" name="image" placeholder="Please enter Your image url" required /><br />
                        </div>
                    </Row>
                    <Row>
                        <div className='px-0 mb-3'>
                            <textarea style={{ outline: "none", border: "1px solid #e5e5e5" }} className='p-3 rounded' name="description" cols="75" rows="4" placeholder='Fuite Description'></textarea>
                        </div>
                    </Row>
                    <div className='text-center'>
                        <button className='add-item-btn border-0 mb-0 text-light py-3 fw-500 px-5 rounded'>Add New Item</button><br />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;