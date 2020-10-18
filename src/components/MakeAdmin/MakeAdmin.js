import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './MakeAdmin.css'
import { useAlert } from 'react-alert'

const MakeAdmin = () => {
    const alert = useAlert()

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        if (info.email === '') {
            alert.error('Please enter email')
        } else {
            const formData = new FormData()
            formData.append('email', info.email);

            fetch('https://creative-agency-service.herokuapp.com/makeAdmin', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    alert.success("Make admin successful.")
                    document.querySelector('#admin-email').value = ''
                })
                .catch(error => {
                    console.error(error)
                    alert.error("Make admin failed.")
                })
        }

    }

    return (
        <section>
            <NavbarMain />
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex" id="make-admin-div">
                    <Form id="make-admin-form" as={Row}>
                        <Col sm="10">

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleBlur} required id="admin-email" />
                            </Form.Group>
                        </Col>
                        <Col sm="2">
                            <Button id="make-admin-btn" onClick={handleSubmit} variant="primary" type="submit">
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