import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Header.css";
import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {

    const location = useLocation();
    const [user] = useAuthState(auth);
    const [navbar, setNavbar] = useState(false);
    const windowScroll = "navbarScroll";
    const windowNotScroll = "navbarNotScroll";
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        setActiveLink(location.pathname + location.hash);
    }, [location, activeLink])

    const scrollWindow = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollWindow)

    return (
        <Navbar collapseOnSelect expand="lg" className={`${navbar ? windowScroll : windowNotScroll} ${location.pathname === "/home" ? "fixedTop" : "stickyTop"}`}>
            <Container className='px-0'>
                <Navbar.Brand className='m-0' to="/home"><img src="https://demo.alura-studio.com/orgafresh/wp-content/uploads/2018/07/logo3-bottom.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-btn' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center pt-1">

                        <Link className={`${activeLink === "/home" ? "active-link-color" : ""} ${user ? "ms-4" : "ms-2"} navLink`} smooth to="/home#">HOME</Link>

                        <Link className={`${activeLink === "/home#about-us" ? "active-link-color" : ""} navLink`} smooth to="/home#about-us">ABOUT US</Link>

                        <Link className={`${activeLink === "/home#inventory" ? "active-link-color" : ""} navLink`} smooth to="/home#inventory">INVENTORY</Link>

                        {user ?
                            <>
                                <Link className={`${activeLink === "/manageItem" ? "active-link-color" : ""} navLink`} smooth to="/manageItem">MANAGE ITEMS</Link>

                                <Link className={`${activeLink === "/addItem" ? "active-link-color" : ""} navLink`} smooth to="/addItem">ADD ITEM</Link>

                                <Link className={`${activeLink === "/myitem" ? "active-link-color" : ""} navLink`} smooth to="/myitem">MY ITEMS</Link>
                            </>
                            :
                            ""
                        }
                    </Nav>
                    <Nav className='logOut-lonIn'>
                        {user ?
                            <Link className='m-0' smooth to="/login"><button onClick={() => signOut(auth)} className="button ripple">Log Out</button></Link>
                            :
                            <Link className='m-0' smooth to="/login"><button className="button ripple ">Log In</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;