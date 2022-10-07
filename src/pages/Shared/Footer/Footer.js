import React, { useState } from 'react';
import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");

    const handleInfoSubmit = () => {
        setEmail("")
    }

    return (
        <footer style={{ background: "black" }} className="footerPadding">
            <div className="container py-5">
                <div className="row py-4 g-5">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h3 className='mb-4 text-light'>Orgafresh Fruites</h3>
                        <p className="font-italic text-light mb-4">Broadly there are two categories of fruits: fleshy fruits and dry fruits. Fleshy fruits include berries, aggregate fruits, and multiple fruits; dry fruits include legumes, cereal grains, capsulate fruits, and nuts.Apples and pears last longer than any other tree fruits.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase text-light  mb-4">INFORMATION</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 text-light">Home</li>
                            <li className="mb-2 text-light">About us</li>
                            <li className="mb-2 text-light">Invertory</li>
                            <li className="mb-2 text-light">Manage item</li>
                            <li className="mb-2 text-light">Add item</li>
                            <li className="text-light">My item</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase text-light  mb-4">My account</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 text-light">Login</li>
                            <li className="mb-2 text-light">Sing up</li>
                            <li className="mb-2 text-light">My Cart</li>
                            <li className="mb-2 text-light">Wishlist</li>
                            <li className="mb-2 text-light">Our Products</li>
                            <li className="mb-2 text-light">Adresses</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h5 className="text-uppercase text-light mb-4">Newsletter</h5>
                        <h6 className='text-light mb-3'>Subcribe For Newsletters</h6>
                        <p className="text-light mb-4">Subscribe to our newsletter. Be the first to know about exciting our food collection. Special foods and much more offer.</p>
                        <div className="rounded">
                            <div className="input-group">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" value={email} />
                                <div className="input-group-append">
                                    <button onClick={handleInfoSubmit} className='button' >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ color: "white" }} className='my-0' />
            <div className="py-3">
                <div className="container text-center">
                    <p className="text-light mb-0 py-2">Copyright © {year} Orgafresh Fruites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;