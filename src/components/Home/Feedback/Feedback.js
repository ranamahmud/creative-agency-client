import React from 'react';
import './Feedback.css'
const Feedback = ({ feedback }) => {


    const { quote, name, from, img } = feedback;
    return (


        <div className="card shadow-sm card-feedback">
            <div className="card-header bg-transparent d-flex  align-items-center">
                <img className="mx-3" src={require(`../../../images/${img}`)} alt="" width="64" height="64" />
                <div>
                    <h6 id="feedback-name">{name}</h6>
                    <h5 id="feedback-from">{from}</h5>

                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{quote.substring(0, 80)}</p>
            </div>

        </div>

    );
};

export default Feedback;