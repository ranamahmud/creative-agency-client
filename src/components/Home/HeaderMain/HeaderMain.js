import React from 'react';
import people from '../../../images/people.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main >
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <button className="btn btn-dark" id="hire-btn">Hire us</button>
                </div>
                <div className="col-md-6">
                    <img src={people} alt="" className="img-fluid" />
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;