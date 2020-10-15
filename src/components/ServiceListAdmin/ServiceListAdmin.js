import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
// import OrderedService from './OrderedService/OrderedService';

const ServiceListAdmin = () => {
    const [userService, setUserService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/services/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])
    return (
        <section>
            <NavbarMain />
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center"
                    style={{ backgroundColor: '#F4F7FC' }}>
                    <div className="row">
                        {
                            // userService.map(service =>
                            //     <OrderedService service={service} />
                            // )
                        }
                    </div>
                </div>



            </div>
        </section >
    );
};

export default ServiceListAdmin;