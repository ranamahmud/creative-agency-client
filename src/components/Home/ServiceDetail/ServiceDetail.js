import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (

        <div id="service-card" className="col-md-4 text-center">
            <Link to={{
                pathname: '/order',
                state: {
                    ...service
                }
            }}>
                <img src=
                    {require(`../../../images/icons/${service.img}`)} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.detail}</p>
            </Link>
        </div>

    );
};

export default ServiceDetail;

