import React from 'react';
import { Image, Nav, Button, Navbar } from 'react-bootstrap';
import "./NavbarMain.css"
const NavbarMain = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Image src={require('../../../images/logos/logo.png')} id="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Our Partners</Nav.Link>
                    <Nav.Link href="#link">Our Team</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                    <Nav.Link href="#link"><Button>Login</Button></Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMain;