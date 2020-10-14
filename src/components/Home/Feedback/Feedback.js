import React from 'react';
import { Link } from 'react-router-dom';

const Feedback = ({ feedback }) => {


    const { quote, name, from, img } = feedback;
    return (


        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={require(`../../../images/${img}`)} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                </div>
            </div>
            <div className="card-body">
                <h5>{from}</h5>
                <p className="card-text text-secondary mt-4">{quote}</p>
            </div>

        </div>

    );
};

export default Feedback;