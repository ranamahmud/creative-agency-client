import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';

const AddService = () => {
    return (
        <section>
            <div className="row"><NavbarMain /></div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control type="email" placeholder="Enter title" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter description" rows={3} />
                        </Form.Group>



                    </Form>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <Form.Group>
                        {/* <input onChange={handleFileChange} type="file" className="form-control" id="fileUpload" /> */}

                        <Form.Label for="files" class="btn">Upload Image</Form.Label>
                        <input id="files"
                            style={{ visibility: 'hidden' }}
                            type="file" />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>

                </div>

            </div>

        </section>
    );
};

export default AddService;