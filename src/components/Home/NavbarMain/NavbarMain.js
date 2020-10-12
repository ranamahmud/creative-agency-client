import React from 'react';
import { Form, Nav, Button, Navbar } from 'react-bootstrap';

const NavbarMain = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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