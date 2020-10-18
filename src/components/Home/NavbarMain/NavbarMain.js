import React, { useContext, useEffect, useState } from 'react';
import { Image, Nav, Button, Navbar } from 'react-bootstrap';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./NavbarMain.css"
import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from '../Login/Login/firebase.config';
import jwt_decode from "jwt-decode";

const NavbarMain = () => {
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://creative-agency-service.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser && loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, [])

    const location = useLocation();
    const logout = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            sessionStorage.setItem('token', null);
            setLoggedInUser(null)
            history.replace('/');
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
                                    <>
                                        <Button variant="dark" id="login-btn" onClick={logout}>Logout</Button>
                                        <Link className="nav-link text-white" to={isAdmin ? "/service-list-admin" : "/order"}>
                                            <Button
                                                id="dash-btn" variant="dark" >Dashboard</Button>
                                        </Link>
                                    </>
                                    :
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
                                        <p style={{ marginRight: "50px", marginTop: "20px" }}> {loggedInUser.name}</p>
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