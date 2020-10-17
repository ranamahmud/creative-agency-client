import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './ServiceListAdmin.css'

const ServiceListAdmin = () => {
    const [selectedOption, setSelectedOption] = useState();


    const [userService, setUserService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])
    const colors = {
        'On Going': "#FFBD3E",
        'Done': "#009444",
        'Pending': "#FF4545"
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        e.target.style.color = colors[e.target.value]
    };

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
                                                <td style={{ width: "200px" }}>
                                                    <select class="custom-select" id="inputGroupSelect01"
                                                        defaultValue={service.status}
                                                        style={{
                                                            color: colors[service.status]
                                                        }}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Done" style={{ color: colors['Done'] }}>Done</option>
                                                        <option value="On Going" style={{ color: colors['On Going'] }}>On Going</option>
                                                        <option value="Pending" style={{ color: colors['Pending'] }}>Pending</option>
                                                    </select>

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