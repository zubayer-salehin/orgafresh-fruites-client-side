import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import "./ManageItem.css";

const ManageItem = () => {

    const [fruites, setFruites] = useState([]);
    const [deleteId, setDeleteId] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let index = 0;

    useEffect(() => {
        setLoading(true);
        fetch("https://immense-tundra-86422.herokuapp.com/fruites")
            .then(res => res.json())
            .then(data => {
                setFruites(data)
                setLoading(false);
            })
    }, [deleteId])

    const handleDeleteItem = (id, email, name) => {
        const confirmBox = window.confirm("Are you sure you want to delete?");
        if (confirmBox) {
            fetch(`https://immense-tundra-86422.herokuapp.com/fruites/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    setDeleteId(id);
                })
            fetch(`https://immense-tundra-86422.herokuapp.com/myItem?email=${email}&name=${name}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
            toast.success(`${name} Successfully Deleted`)
        } else {
            toast.info("Thank you for not Deleted")
        }
    }


    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div>
            <h1 className='mt-4 text-center manage-title'>Manage Inventories Item</h1>
            <div className='manage-container'>
                <div className='text-end'>
                    <button onClick={() => navigate("/addItem")} className='add-item-btn border-0 mb-4 text-light py-2 fw-500 px-4 rounded'><FontAwesomeIcon className='delete-icon' icon={faCirclePlus}></FontAwesomeIcon>Add New Item</button>
                </div>
                <Table bordered responsive className='text-center'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fruite Name</th>
                            <th>Price</th>
                            <th>Supplier Name</th>
                            <th>Quantity</th>
                            <th>Sold</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruites.map(fruite => <tr key={fruite._id} className='fw-500'>
                            <td className='pt-3'>{++index}</td>
                            <td className='pt-3'>{fruite.name}</td>
                            <td className='pt-3'>{fruite.price}</td>
                            <td className='pt-3'>{fruite.supplierName}</td>
                            <td className='pt-3'>{fruite.quantity}</td>
                            <td className='pt-3'>{fruite.sold}</td>
                            <td className='deleteBtn'><button onClick={() => handleDeleteItem(fruite._id, fruite.email, fruite.name)} className='bg-danger border-0 text-light py-2 fw-500 px-4 rounded'><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default ManageItem;