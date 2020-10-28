import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
import { useSpring, animated } from 'react-spring'

const ServiceDetail = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    return (

        <div id="service-card" className="col-md-4 text-center">
            <Link to={{
                pathname: '/order',
                state: {
                    ...service
                }
            }}>
                <animated.div
                    class="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >

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
                </animated.div>

            </Link>
        </div>
    );
};

export default ServiceDetail;

