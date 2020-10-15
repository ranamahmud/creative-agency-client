import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './Review.css'
const Review = () => {
    const [review, setReview] = useState({});
    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleAddReview = (e) => {

        console.log(review);
        // fetch('https://vast-waters-59392.herokuapp.com/addActivity', {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),
        })
            .then(res => {
                console.log("success");
                // history.push('/event-tasks');
            })
        e.preventDefault();
    }
    return (
        <section>
            <NavbarMain />
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex"
                    style={{ backgroundColor: '#F4F7FC' }}
                >
                    <Form id="review-form" onSubmit={handleAddReview}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your name "
                                name="name"
                                onBlur={handleBlur} required
                            />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Company’s name, Designation" name="company"
                                onBlur={handleBlur} required
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Description"
                                name="description"
                                onBlur={handleBlur} required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>

            </div>
        </section>
    );
};

export default Review;