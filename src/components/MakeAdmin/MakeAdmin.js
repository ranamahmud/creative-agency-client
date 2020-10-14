import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';

const MakeAdmin = () => {
    return (
        <section>
            <NavbarMain />
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex">
                    <Form as={Row}>
                        <Col sm="10">

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col sm="2">
                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Col>

                    </Form>

                </div>

            </div>
        </section>
    );
};

export default MakeAdmin;