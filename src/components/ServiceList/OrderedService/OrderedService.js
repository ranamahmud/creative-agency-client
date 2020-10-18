import React from 'react';
import { Image } from 'react-bootstrap';
import './OrderedService.css'
const OrderedService = ({ service }) => {

    return (

        <div className="col-md-4 card-ordered text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            service.image ? <Image style={{
                                height: '74px',
                                width: '74px',
                                float: 'left',
                            }} src={`data:image/png;base64,${service.image.img}`} />
                                :
                                <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${service.img}`} alt="" />
                        }
                    </div>
                    <div className="col">
                        {
                            service.status == "Pending" &&
                            <button type="button" className="btn btn-lg order-status" disabled
                                style={{
                                    backgroundColor: '#FFE3E3',
                                    color: '#FF4545'
                                }}
                            >
                                {service.status}
                            </button>
                        }
                        {
                            service.status == "Done" &&
                            <button type="button" className="btn btn-lg order-status" disabled
                                style={{
                                    backgroundColor: '#C6FFE0',
                                    color: '#009444'
                                }}
                            >
                                {service.status}
                            </button>
                        }
                        {
                            service.status == "On Going" &&
                            <button type="button" className="btn btn-lg order-status" disabled
                                style={{
                                    backgroundColor: 'rgba(255, 161, 92,0.20)',
                                    color: '#FFBD3E'
                                }}
                            >
                                {service.status}
                            </button>
                        }
                    </div>
                    <div className="w-100 order-title">{service.name}</div>
                    <div className="w-100 order-detail">{service.details}</div>

                </div>
            </div>

        </div>

    );
};

export default OrderedService;