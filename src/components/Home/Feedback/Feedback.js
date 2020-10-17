import React from 'react';
import { Image } from 'react-bootstrap';
import './Feedback.css'
const Feedback = ({ feedback }) => {


    const { description, name, from, img } = feedback;
    return (


        <div className="card shadow-sm card-feedback">
            <div className="card-header bg-transparent d-flex  align-items-center">
                {
                    img !== undefined &&
                    (
                        img.slice(0, 4) === 'http' ?

                            <Image
                                className="mx-3 md-4"
                                src={img}
                                width="64" height="64"
                            />
                            :
                            <img className="mx-3 md-4" src={require(`../../../images/${img}`)} alt="" width="64" height="64" />
                    )
                }
                <div>
                    <h6 id="feedback-name">{name}</h6>
                    <h5 id="feedback-from">{from}</h5>

                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{description.substring(0, 80)}</p>
            </div>

        </div>

    );
};

export default Feedback;