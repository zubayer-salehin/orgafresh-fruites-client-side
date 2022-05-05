import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Header.css";

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ background: "black" }}>
                <Container fluid className='mx-5 px-5' >
                    <Navbar.Brand className='m-0' as={Link} to="/home"><img src="https://demo.alura-studio.com/orgafresh/wp-content/uploads/2018/07/logo3-bottom.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-3 me-auto">
                            <Nav.Link className='ms-3 my-0 text-white' as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link className='ms-3 my-0 text-white' href="home#Inventory">INVENTORY</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <>
                                    <Nav.Link className='me-3 my-0 text-white' as={Link} to="/manageItem">MANAGE ITEMS</Nav.Link>
                                    <Nav.Link className='me-3 my-0 text-white' as={Link} to="/addItem">ADD ITEM</Nav.Link>
                                    <Nav.Link className='me-3 my-0 text-white' as={Link} to="/myitem">MY ITEMS</Nav.Link>
                                    <Nav.Link className='me-3 my-0 text-white' as={Link} to="/blog">BLOG</Nav.Link>
                                </>
                                :
                                ""
                            }
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
        </div>
    );
};

export default Header;