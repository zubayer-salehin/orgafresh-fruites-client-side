import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [myFruites, setMyFruites] = useState([]);
    const [user] = useAuthState(auth);
    const [fruiteName, setFruiteName] = useState("");
    let index = 0;

    useEffect(() => {
        const email = user.email
        fetch(`http://localhost:5000/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                setMyFruites(data);
            })
    }, [user, fruiteName])


    const handleDeleteItem = (id,email,name) => {
        const confirmBox = window.confirm("Are you sure you want to delete?");
        if (confirmBox) {
            fetch(`http://localhost:5000/myItem/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    setFruiteName(name);
                })

            fetch(`http://localhost:5000/fruites?email=${email}&name=${name}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        } else {
            alert("Thanks you save my life")
        }
    }
    return (
        <div>
            <h1 className='text-center my-3 pb-2'>My Item</h1>
            <Container>
                <Table bordered className='text-center'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Fruite Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>DELETE</th>
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
                            <td className='deleteBtn'><button onClick={() => handleDeleteItem(fruite._id,fruite.email,fruite.name)} className='bg-danger border-0 text-light py-2 fw-500 px-4 rounded'><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
};

export default MyItem;