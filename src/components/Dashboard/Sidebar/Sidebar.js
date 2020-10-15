import React, { useContext, useEffect, useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));

    // }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul id="sidebar-list" className="list-unstyled">


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

                {/* {isAdmin === true && */}
                <div>
                    <li>
                        <Link to="/service-list-admin" >
                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                            <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-service" >
                            {/* {/* <FontAwesomeIcon icon={faUsers} /> */}
                            <span>Add Service</span>

                        </Link>
                    </li>
                    <li>
                        <Link to="/make-admin" >
                            {/* {/* <FontAwesomeIcon icon={faFileAlt} />  */}
                            <span>Make Admin</span>
                        </Link>
                    </li>

                </div>
                {/* } */}
            </ul>
        </div>
    );
};

export default Sidebar;