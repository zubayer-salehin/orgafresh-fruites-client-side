import React from 'react';
import Footer from '../Shared/Footer/Footer';
import "./Blog.css";


const Blog = () => {

    return (
        <>
            <div className='blog-container'>
                <h3>1. Difference between javascript and nodejs?</h3>
                <div className='row g-5'>
                    <p className='col-6'>NodeJS is a go-platform and opensource Javascript runtime surroundings that permits the javascript to be run on the server-facet. Nodejs permits Javascript code to run out of doors the browser. Nodejs comes with loads of modules and frequently used in web development. </p>
                    <p className='col-6'>Javascript is a Scripting language. It is ordinarily abbreviated as JS. It can be stated that Javascript is the up to date model of the ECMA script. Javascript is a high-stage programming language that makes use of the concept of Oops however it is based on prototype inheritance. </p>
                </div>
                <h3 className='mt-2'>2. When should you use nodejs and when should you use mongodb?</h3>
                <div className='row g-5'>
                    <p className='col-6'>Node. Js is in general used for non-blocking off, event-driven servers, because of its single-threaded nature. It's used for classic net websites and back-cease API offerings, however changed into designed with real-time, push-based totally architectures in thoughts. </p>
                    <p className='col-6'>SQL. NoSQL databases like MongoDB are an amazing choice while your data is report-centric and would not in shape well into the schema of a relational database, whilst you need to accommodate massive scale, while you are rapidly prototyping, and some different use cases </p>
                </div>
                <h3 className='mt-2'>3. Differences between sql and nosql databases?</h3>
                <div className='row g-5'>
                    <p className='col-6'>SQL databases defines and manipulates records based totally structured question language (SQL). Seeing from a facet this language is extremely effective. SQL is one of the maximum versatile and broadly-used alternatives available which makes it a secure desire particularly for splendid complicated queries. But from other facet it could be restrictive. SQL requires you to use predefined schemas to decide the shape of your statistics before you figure with it.</p>
                    <p className='col-6'>A NoSQL database has dynamic schema for unstructured facts. Data is saved in lots of approaches which means it could be report-oriented, column-oriented, graph-based or organized as a KeyValue keep. This flexibility method that documents can be created without having defined structure first. Also every file can have its personal specific structure. The syntax varies from database to database, and you may add fields as you pass. </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;