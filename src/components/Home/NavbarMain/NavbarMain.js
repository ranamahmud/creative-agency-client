import React from 'react';
import { Image, Nav, Button, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./NavbarMain.css"
const NavbarMain = () => {
    const location = useLocation();
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Image src={require('../../../images/logos/logo.png')} id="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {
                location.pathname === '/' &&

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Our Partners</Nav.Link>
                        <Nav.Link href="#link">Our Team</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Link className="nav-link text-white" to="/login"><Button>Login</Button></Link>
                    </Nav>

                </Navbar.Collapse>
            }
        </Navbar>
    );
};

export default NavbarMain;