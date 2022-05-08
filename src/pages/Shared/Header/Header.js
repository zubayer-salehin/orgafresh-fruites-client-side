import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink"

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" style={{ background: "black" }}>
            <Container fluid className='mx-5 px-5' >
                <Navbar.Brand className='m-0' as={Link} to="/home"><img src="https://demo.alura-studio.com/orgafresh/wp-content/uploads/2018/07/logo3-bottom.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center pt-1">

                        <CustomLink className='p-2 ms-3 mx-2 fs-15px-fw-500' as={Link} to="/home">HOME</CustomLink>
                        {user ?
                            <>
                                <CustomLink className='p-2 mx-2 fs-15px-fw-500' as={Link} to="/manageItem">MANAGE ITEMS</CustomLink>
                                <CustomLink className='p-2 mx-2 fs-15px-fw-500' as={Link} to="/addItem">ADD ITEM</CustomLink>
                                <CustomLink className='p-2 mx-2 fs-15px-fw-500' as={Link} to="/myitem">MY ITEMS</CustomLink>
                            </>
                            :
                            ""
                        }
                        <CustomLink className='p-2 mx-2 fs-15px-fw-500' as={Link} to="/blog">BLOG</CustomLink>
                    </Nav>
                    <Nav>
                        {user ?
                            <Nav.Link className='m-0' as={Link} to="/login"><button onClick={() => signOut(auth)} className="button ripple">Log Out</button></Nav.Link>
                            :
                            <Nav.Link className='m-0' as={Link} to="/login"><button className="button ripple ">Log In</button></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;