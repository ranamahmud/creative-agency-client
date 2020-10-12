import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="contact row my-5 py-5">
            <Row> <Col md={6}>
                <div className="container">
                    <div className="section-header text-center text-white mb-5">
                        <h1>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-9 mx-auto">

                    </div>
                </div>

            </Col>
                <Col md={6}>
                    <div className="container">
                        <div className="section-header text-center text-white mb-5">
                            <h5 className="text-primary">Contact</h5>
                            <h1>Always  connect with us</h1>
                        </div>
                        <div className="col-md-9 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Address *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject *" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-primary"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </Col></Row>
            <Row className="text-center mx-auto">copyright Orange labs {new Date().toDateString()}</Row>
        </section>
    );
};

export default Footer;