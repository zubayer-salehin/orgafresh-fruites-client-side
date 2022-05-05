import React from 'react';

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
        </div>
    );
};

export default Blog;