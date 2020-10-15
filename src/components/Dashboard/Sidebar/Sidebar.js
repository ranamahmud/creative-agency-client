import React, { useContext } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://salty-plateau-71286.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">


                <div>
                    <li>
                        <Link to="/order" className="text-white">
                            <Image src={require('../../../images/icons/shopping-cart.png')} /><span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-list" className="text-white">
                            <Image src={require('../../../images/icons/service-list.png')} /><span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <Image src={require('../../../images/icons/review.png')} /> <span>Review</span>
                        </Link>
                    </li>

                </div>

                {/* {isAdmin && <div>
                    <li>
                        <Link to="/allPatients" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                        </Link>
                    </li>

                </div>} */}
            </ul>
        </div>
    );
};

export default Sidebar;