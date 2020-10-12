import React from 'react';
import mobile from '../../../images/icons/web.png';
import web from '../../../images/icons/web.png';
import graphic from '../../../images/icons/graphic.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile design',
        detail: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: mobile
    },
    {
        name: 'Graphic design',
        detail: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphic
    },
    {
        name: 'Web development',
        detail: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: web
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;