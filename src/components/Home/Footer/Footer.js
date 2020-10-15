import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer id="footer" className="footer-home row my-5 py-5">
            <div>
                <Row>
                    <Col md={6}>
                        <div className="container">
                            <div className="section-header text-center text-white mb-5">
                                <h1>Let us handle your project, professionally.</h1>
                                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <div className="mb-5 mx-auto">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your email address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name / company’s name" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="button" className="btn btn-primary"> Send </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
            <Col md={12}>
                <div className="container">
                    <div className="section-header text-center text-white mb-5">
                        <p>copyright Orange labs {new Date().toDateString()}</p>
                    </div>

                </div>
            </Col>
        </footer>
    );
};

export default Footer;