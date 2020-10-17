import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';

const MakeAdmin = () => {

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info)
    }

    const handleSubmit = () => {
        console.log("button clicked")
        const formData = new FormData()
        console.log(info);
        formData.append('email', info.email);

        // fetch('https://salty-plateau-71286.herokuapp.com/makeAdmin', {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section>
            <NavbarMain />
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex">
                    <Form as={Row}>
                        <Col sm="10">

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleBlur} required />
                            </Form.Group>
                        </Col>
                        <Col sm="2">
                            <Button onClick={handleSubmit} variant="primary" type="submit">
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