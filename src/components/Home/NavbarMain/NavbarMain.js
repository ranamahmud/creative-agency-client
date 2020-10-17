import React, { useContext } from 'react';
import { Image, Nav, Button, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./NavbarMain.css"
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from '../Login/Login/firebase.config';
import jwt_decode from "jwt-decode";

const NavbarMain = () => {
    const history = useHistory();

    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

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
            history.replace('/');
        }).catch(function (error) {
            // An error happened.
        });
    }

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
    }
    return (
        <Navbar expand="lg">

            <Link className="navbar-brand" to="/">
                <Image src={require('../../../images/logos/logo.png')} id="logo" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {
                location.pathname === '/' ?

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">


                            <Link className="nav-link" to="/">
                                Home
                        </Link>
                            <Nav.Link href="#partners">Our Partners</Nav.Link>
                            <Nav.Link href="#link">Our Team</Nav.Link>
                            <Nav.Link href="#footer">Contact Us</Nav.Link>

                            {
                                (loggedInUser && loggedInUser.email) ?
                                    <Button variant="dark" id="login-btn" onClick={logout}>Logout</Button> :
                                    <Link className="nav-link text-white" to="/login">
                                        <Button variant="dark" id="login-btn">Login</Button>
                                    </Link>

                            }



                        </Nav>

                    </Navbar.Collapse> :
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">





                            {
                                (loggedInUser && loggedInUser.email) ?
                                    <>
                                        <Link className="nav-link">
                                            {loggedInUser.name}
                                        </Link>
                                        <Button className="nav-link text-white" variant="dark" id="login-btn" onClick={logout}>Logout</Button>

                                    </>

                                    :
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