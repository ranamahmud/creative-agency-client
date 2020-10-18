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


                {
                    service.image && (
                        (service.image
                            && typeof (service.image) !== "string") ? <img
                                className="mx-3 md-4"
                                width="64" height="64"
                                src={`data:image/png;base64,${service.image.img}`} />
                            :
                            <img
                                className="mx-3 md-4"
                                width="64" height="64"
                                src={require(`../../../images/icons/${service.image}`)} alt="" />
                    )

                }


                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.detail}</p>
            </Link>
        </div>

    );
};

export default ServiceDetail;

