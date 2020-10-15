import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';

const Review = () => {
    return (
        <section>
            <NavbarMain />
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your name " />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Company’s name, Designation" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Description" />
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