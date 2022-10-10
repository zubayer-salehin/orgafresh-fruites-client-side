import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
        fetch("https://sleepy-waters-32923.herokuapp.com/fruites")
            .then(res => res.json())
            .then(data => {
                setFruites(data)
                setLoading(false);
            })
    }, [deleteId])

    const handleDeleteItem = (id, email, name) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: `You want to delete ${name} fruite`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sleepy-waters-32923.herokuapp.com/fruites/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                `${name} fruite is deleted`,
                                'success'
                            )
                            setDeleteId(id);
                        }
                    })

                fetch(`https://sleepy-waters-32923.herokuapp.com/myItem?email=${email}&name=${name}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    `Your ${name} fruite is safe`,
                    'error'
                )
            }
        })
    }


    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div>
            <h1 className='mt-4 text-center manage-title'>Manage Inventories Item</h1>
            <div className='manage-container pb-5 mb-5'>
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