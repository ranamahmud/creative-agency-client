import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer id="footer" className="footer-home py-5">

            <Row>
                <Col md={6}>
                    <div className="container ml-5">
                        <div className="section-header mb-5" id="footer-text">
                            <h1 >Let us handle your project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>

                    </div>
                </Col>
                <Col md={6}>
                    <div className="container">
                        <div className="mb-5 mx-auto">
                            <form id="footer-form" action="">
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
                                    <button id="footer-btn" type="button" className="btn btn-dark"> Send </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </Col>
            </Row>
            <Col md={12}>
                <div className="container">
                    <div className="text-center mb-5 mt-5">
                        <p id="footer-copy">copyright Orange labs {new Date().toDateString()}</p>
                    </div>

                </div>
            </Col>
        </footer>
    );
};

export default Footer;