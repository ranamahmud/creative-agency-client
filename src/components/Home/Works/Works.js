import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";

import './Works.css'
const Works = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const images = [
        require('../../../images/carousel-1.png'),
        require('../../../images/carousel-2.png'),
        require('../../../images/carousel-3.png'),
        require('../../../images/carousel-4.png'),
        require('../../../images/carousel-5.png'),
    ];
    return (
        <div id="works">
            <div className="text-center" id="works-text">
                <h2>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            </div>

            <div id="works-carousel">
                <Carousel
                    ssr
                    // deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    infinite={true}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >
                    {images.map(image => {
                        return (
                            <Image fluid
                                draggable={false}
                                style={{
                                    width: "468.1px",
                                    height: "336.53px",

                                }}
                                src={image}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default Works;