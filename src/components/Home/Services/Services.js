import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div className="text-center"
                style={{
                    paddingTop: "50px"
                }}
            >
                <h2>Provide awesome <span style={{
                    color: '#7AB259',
                }}>services</span></h2>

            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 3)
                            .map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;