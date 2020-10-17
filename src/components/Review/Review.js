import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './Review.css'
import { useAlert } from 'react-alert'
import { UserContext } from '../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const alert = useAlert()
    console.log(loggedInUser.photoURL);
    const [review, setReview] = useState({
        img: loggedInUser.photoURL
    });
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
                alert.success('Review Placed Successfully!')
                document.querySelector('#review-form').reset()


            })
        e.preventDefault();
    }
    return (
        <section>
            <NavbarMain />
            <section className="container-fluid row">

                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex"
                    style={{ backgroundColor: '#F4F7FC' }}>
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

            </section>
        </section>
    );
};

export default Review;