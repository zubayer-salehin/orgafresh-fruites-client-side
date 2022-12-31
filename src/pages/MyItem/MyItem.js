import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Footer from "../Shared/Footer/Footer"
import "./MyItem.css";
import Swal from 'sweetalert2';

const MyItem = () => {

    const [myFruites, setMyFruites] = useState([]);
    const [user] = useAuthState(auth);
    const [fruiteName, setFruiteName] = useState("");
    const [loading, setLoading] = useState(true);
    let index = 0;

    useEffect(() => {
        setLoading(true);
        const email = user?.email;
        fetch(`https://orgafresh-fruites-server-side.vercel.app/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyFruites(data);
                setLoading(false);
            })
    }, [user, fruiteName])


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
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://orgafresh-fruites-server-side.vercel.app/myItem/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                `${name} fruite was deleted`,
                                'success'
                            )
                            setFruiteName(name);
                        }
                    })

                fetch(`https://orgafresh-fruites-server-side.vercel.app/fruites?email=${email}&name=${name}`, {
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
        <>
            <div className='mb-5 pb-5'>
                <h1 className='text-center my-3 pb-2'>My Item</h1>
                <div className='my-item-container'>
                    <Table responsive bordered className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Fruite Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFruites.map(fruite => <tr key={fruite._id} className='fw-500'>
                                <td className='pt-3'>{++index}</td>
                                <td className='pt-3'>{fruite.userName}</td>
                                <td className='pt-3'>{fruite.email}</td>
                                <td className='pt-3'>{fruite.name}</td>
                                <td className='pt-3'>{fruite.price}</td>
                                <td className='pt-3'>{fruite.quantity}</td>
                                <td className='deleteBtn'><button onClick={() => handleDeleteItem(fruite._id, fruite.email, fruite.name)} className='bg-danger border-0 text-light py-2 fw-500 px-4 rounded'><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>Delete</button></td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div >
            <Footer></Footer>
        </>
    )
};

export default MyItem;