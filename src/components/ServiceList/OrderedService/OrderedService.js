import React from 'react';
import { Image } from 'react-bootstrap';

const OrderedService = ({ service }) => {
    return (
        <div className="col-md-6" id="service" id={service._id}>
            <div className="row">
                <div className="col-md-4">
                    {
                        service.image ? <Image style={{
                            height: '74px',
                            width: '74px'
                        }} src={`data:image/png;base64,${service.image.img}`} />
                            :
                            <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${service.img}`} alt="" />

                    }

                </div>
                <div className="col-md-4">
                    <h1>{service.name}</h1>
                    <p>{service.details}</p>

                </div>
            </div>
        </div >
    );
};

export default OrderedService;