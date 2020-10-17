import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './ServiceListAdmin.css'
const ServiceListAdmin = () => {
    const [userService, setUserService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])
    const handleChange = (e, service) => {
        console.log(e.target.selected)
        e.target.selected = e.target.value
        service.value = e.target.value
    }
    return (
        <section>
            <NavbarMain />
            <section className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex"
                    style={{ backgroundColor: '#F4F7FC' }}>
                    <div className="row">

                        <table className="table table-borderless">
                            <div id="service-header">
                                <thead>
                                    <tr>
                                        <th className="text-secondary" scope="col">Name</th>

                                        <th className="text-secondary" scope="col">Email</th>
                                        <th className="text-secondary" scope="col">Service</th>

                                        <th className="text-secondary" scope="col">Project Details</th>
                                        <th className="text-secondary" scope="col">Status</th>

                                    </tr>
                                </thead>
                            </div>
                            <div>
                                <tbody>
                                    {
                                        userService.map((service) =>

                                            <tr key={service._id}>
                                                <td style={{ width: "150px" }}>{service.userName}</td>
                                                <td style={{ width: "130px" }}>{service.email}</td>
                                                <td style={{ width: "150px" }}>{service.name}</td>
                                                <td>{service.details}</td>
                                                <td>

                                                    {
                                                        <form>
                                                            <select >
                                                                <option value="On Going">On Going</option>
                                                                <option value="Pending">Pending</option>
                                                                <option value="Done">Done</option>
                                                            </select>
                                                        </form>
                                                    }
                                                    {



                                                        <form>
                                                            <select value={service.status} onChange={(e) => handleChange(e, service)}>
                                                                <option value="On Going">On Going</option>
                                                                <option value="Pending">Pending</option>
                                                                <option value="Done">Done</option>
                                                            </select>
                                                        </form>

                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </div>
                        </table>

                    </div>
                </div>



            </section>
        </section >
    );
};

export default ServiceListAdmin;