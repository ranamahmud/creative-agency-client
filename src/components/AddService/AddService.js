import React, { useState } from 'react';
import { Button, Form, Image, Navbar } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './AddService.css'
import { useAlert } from 'react-alert'

const AddService = () => {
    const alert = useAlert()
    const [info, setInfo] = useState({
        status: 'Pending'
    });
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile)
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        if (file === null) {
            alert.error('You must select a image file')

        } else {
            formData.append('file', file);
            formData.append('userName', info.userName);
            formData.append('email', info.email);
            formData.append('name', info.name);
            formData.append('details', info.details);
            formData.append('price', info.price);
            console.log(info);
            // fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {  
            fetch('http://localhost:5000/addOrder', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    alert.success('Order Placed Successfully!')
                    document.querySelector('#order-form').reset()
                })
                .catch(error => {
                    alert.error('Order Placed Failed!')

                    console.error(error)
                })

        }

        e.preventDefault()
    }
    return (
        <section>
            <NavbarMain />
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-5 col-sm-12 col-12 d-flex">
                    <Form id="add-service">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >Service Title</Form.Label>
                            <Form.Control type="email" placeholder="Enter title" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter description" rows={3} />
                        </Form.Group>



                    </Form>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <div className="form-group"
                        id="upload-img-form"
                    >
                        <div className="custom-file"
                        >
                            <label id="upload-btn-img" className="custom-file-label" htmlFor="customFile"
                            ><Image src={require('../../images/icons/upload-image.png')}
                                style={{ width: "24px", height: "24px" }}
                                />Upload image</label>
                            <input type="file"
                                onChange={handleFileChange}
                                id="customFile"
                                hidden
                            />

                        </div>
                    </div>

                    <button id="add-btn"
                        className="text-white"
                    >
                        Submit
  </button>
                </div>

            </div>

        </section>
    );
};

export default AddService;