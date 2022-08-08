import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Footer from "../Shared/Footer/Footer"
import "./MyItem.css";

const MyItem = () => {

    const [myFruites, setMyFruites] = useState([]);
    const [user] = useAuthState(auth);
    const [fruiteName, setFruiteName] = useState("");
    const [loading, setLoading] = useState(true);
    let index = 0;
    
    useEffect(() => {
        setLoading(true);
        const email = user?.email;
        fetch(`https://sleepy-waters-32923.herokuapp.com/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                setMyFruites(data);
                setLoading(false);
            })
    }, [user, fruiteName])


    const handleDeleteItem = (id, email, name) => {
        const confirmBox = window.confirm("Are you sure you want to delete?");
        if (confirmBox) {
            fetch(`https://sleepy-waters-32923.herokuapp.com/myItem/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    setFruiteName(name);
                })

            fetch(`https://sleepy-waters-32923.herokuapp.com/fruites?email=${email}&name=${name}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
            toast.success(`${name} Successfully Deleted`);
        } else {
            toast.info("Thank you for not Deleted")
        }
    }
    return (loading ? <Loading loadingStatus="true"></Loading> :
    <>
        <div className='mb-5'>
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