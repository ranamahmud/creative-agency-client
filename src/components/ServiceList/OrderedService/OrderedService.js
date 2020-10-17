import React from 'react';
import { Image } from 'react-bootstrap';
import './OrderedService.css'
const OrderedService = ({ service }) => {
    console.log(service)
    return (

        <div className="col-md-4 card-ordered text-center">

            {
                service.image ? <Image style={{
                    height: '74px',
                    width: '74px',
                    float: 'left',
                }} src={`data:image/png;base64,${service.image.img}`} />
                    :
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${service.img}`} alt="" />
            }
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.details}</p>
        </div>

    );
};

export default OrderedService;