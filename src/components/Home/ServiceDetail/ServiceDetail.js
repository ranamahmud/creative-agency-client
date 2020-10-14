import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    const id = service._id;
    return (

        <div className="col-md-4 text-center">
            <Link to={{
                pathname: "/order",
                state: { id }

            }}>
                <img style={{ height: '50px' }} src=
                    {require(`../../../images/icons/${service.img}`)} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.detail}</p>
            </Link>
        </div>

    );
};

export default ServiceDetail;

