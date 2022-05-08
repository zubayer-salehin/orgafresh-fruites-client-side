import React from 'react';
import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer style={{background:"black"}}>
            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h3 className='mb-4 text-light'>Orgafresh Fruites</h3>
                        <p className="font-italic text-light">Broadly there are two categories of fruits: fleshy fruits and dry fruits. Fleshy fruits include berries, aggregate fruits, and multiple fruits; dry fruits include legumes, cereal grains, capsulate fruits, and nuts</p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase text-light  mb-4">Shop</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 text-light">For Women</li>
                            <li className="mb-2 text-light">For Men</li>
                            <li className="mb-2 text-light">Stores</li>
                            <li className="mb-2 text-light">Our Blog</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase text-light  mb-4">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 text-light">Login</li>
                            <li className="mb-2 text-light">Register</li>
                            <li className="mb-2 text-light">Wishlist</li>
                            <li className="mb-2 text-light">Our Products</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase text-light mb-4">Newsletter</h6>
                        <p className="text-light mb-4">Be the first to know about exciting our food collection. Special foods and much more.</p>
                        <div className="rounded">
                            <div className="input-group">
                                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                                    <div className="input-group-append">
                                        <button className='button' type="submit">Submit</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="container text-center">
                    <p className="text-light mb-0 py-2">Copyright © {year} Orgafresh Fruites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;