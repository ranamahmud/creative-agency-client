import React, { useEffect, useState } from 'react';

import './Feedbacks.css';

import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Clients Feedback</h5>
                </div>
                <div className="card-deck mt-5">
                    {
                        feedbacks.map(feedback => <Feedback feedback={feedback} key={feedback.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;