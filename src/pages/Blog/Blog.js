import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {

    const handleDeleteAllData = () => {
        fetch("https://immense-tundra-86422.herokuapp.com/fruites", {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='my-5 text-center'>
            <button onClick={handleDeleteAllData} className='button'>Delete</button>
            <Footer></Footer>
        </div>
    );
};

export default Blog;