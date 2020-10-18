import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import OrderedService from './OrderedService/OrderedService';

const ServiceList = () => {
    const [userService, setUserService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://creative-agency-service.herokuapp.com/orders/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])


    return (
        <section>
            <NavbarMain />
            <section className="container-fluid row">

                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center"
                    style={{ backgroundColor: '#F4F7FC' }}>
                    <div className="row">
                        {
                            userService.map(service =>
                                <OrderedService
                                    key={service._id}
                                    service={service} />
                            )
                        }
                    </div>
                </div>

            </section>
        </section >
    );
};

export default ServiceList;