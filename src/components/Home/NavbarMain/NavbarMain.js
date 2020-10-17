import React, { useContext } from 'react';
import { Image, Nav, Button, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./NavbarMain.css"
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from '../Login/Login/firebase.config';
const NavbarMain = () => {
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logout = () => {
        console.log('clicked');

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log('logged out');
            sessionStorage.setItem('token', null);
            setLoggedInUser(null)
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <Navbar expand="lg">

            <Link className="navbar-brand" to="/">
                <Image src={require('../../../images/logos/logo.png')} id="logo" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {
                location.pathname === '/' &&

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Nav.Link href="#partners">Our Partners</Nav.Link>
                        <Nav.Link href="#link">Our Team</Nav.Link>
                        <Nav.Link href="#footer">Contact Us</Nav.Link>

                        {
                            loggedInUser && loggedInUser.email ?
                                <Button variant="dark" id="login-btn" onClick={logout}>Logout</Button> :
                                <Link className="nav-link text-white" to="/login">
                                    <Button variant="dark" id="login-btn">Login</Button>
                                </Link>

                        }



                    </Nav>

                </Navbar.Collapse>
            }
        </Navbar>
    );
};

export default NavbarMain;