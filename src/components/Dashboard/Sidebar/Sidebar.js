import React, { useContext, useEffect, useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, Redirect, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
const Sidebar = (props) => {
    const location = useLocation();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        // fetch('https://salty-plateau-71286.herokuapp.com/isAdmin', {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, [])


    return (


        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul id="sidebar-list" className="list-unstyled">


                {
                    isAdmin === false &&
                    <div>
                        <li>
                            <Link to="/order" >
                                <Image src={require('../../../images/icons/shopping-cart.png')} /><span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/service-list" >
                                <Image src={require('../../../images/icons/service-list.png')} /><span>Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" >
                                <Image src={require('../../../images/icons/review.png')} /> <span>Review</span>
                            </Link>
                        </li>

                    </div>
                }
                {/* {
                    (isAdmin === true
                        // &&
                        // (
                        //     location.pathname !== '/review' ||
                        //     location.pathname !== '/service-list-admin'

                        // )

                    ) &&
                    (
                        <Redirect
                            to={{
                                pathname: "/service-list-admin",
                                state: { from: props.location }
                            }}
                        />
                    )
                } */}

                {

                    isAdmin === true &&
                    <div>
                        <li>
                            <Link to="/service-list-admin" >
                                <Image src={require('../../../images/icons/service-list.png')} />
                                <span>Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-service" >
                                <Image src={require('../../../images/icons/plus.png')} />
                                <span>Add Service</span>

                            </Link>
                        </li>
                        <li>
                            <Link to="/make-admin" >
                                <Image src={require('../../../images/icons/make-admin.png')} />
                                <span>Make Admin</span>
                            </Link>
                        </li>

                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;