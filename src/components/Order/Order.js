import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './Order.css'
import { useAlert } from 'react-alert'

const Order = (props) => {
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
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        if (file === null) {
            alert.error('You must select a image file')

        } else {
            formData.append('file', file);
            formData.append('userName', info.userName);
            formData.append('email', info.email);
            formData.append('name', info.name);
            formData.append('details', info.details);
            formData.append('price', info.price);
            formData.append('status', info.status);
            fetch('https://creative-agency-service.herokuapp.com/addOrder', {
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

            <section className="container-fluid row">

                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 d-flex"
                    style={{ backgroundColor: '#F4F7FC' }}>


                    <form id="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="userName" placeholder="Your name / company’s name"
                                required
                            />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="name"
                                defaultValue={
                                    props.location.state === undefined ? '' : props.location.state.name
                                }
                                required
                            />
                        </div>
                        <div className="form-group">

                            <textarea onBlur={handleBlur} type="text" className="form-control" name="details" placeholder="Project Details" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" required />
                        </div>
                        <div className="form-group">
                            <div className="custom-file"
                            >
                                <label id="upload-btn" className="custom-file-label" htmlFor="customFile"
                                ><Image src={require('../../images/icons/upload-image.png')}
                                    style={{ width: "24px", height: "24px" }}
                                    />Upload project file</label>
                                <input type="file"
                                    onChange={handleFileChange}
                                    id="customFile"
                                    required
                                />

                            </div>
                        </div>

                        <button id="order-send" type="submit" className="btn btn-dark">Send</button>


                    </form>

                </div>
            </section>
        </section >
    );
};

export default Order;