import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';
import './Order.css'
const Order = (props) => {
    console.log(props.location.state)
    const [info, setInfo] = useState({});
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
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault()
    }

    return (
        <section>
            <NavbarMain />

            <section className="container-fluid row">

                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ right: 0, backgroundColor: "#F4F7FC" }}>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="userName" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="name"
                                defaultValue={
                                    props.location.state.name || ''
                                }

                            />
                        </div>
                        <div className="form-group">

                            <textarea onBlur={handleBlur} type="text" className="form-control" name="details" placeholder="Project Details" />
                        </div>
                        <div className="form-group col-md-4">

                            <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                        </div>
                        <div className="form-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    onChange={handleFileChange}
                                    id="customFile" />
                                <label id="upload-btn" className="custom-file-label" for="customFile"><Image src={require('../../images/icons/upload-image.png')}
                                    style={{ width: "24px", height: "24px" }}
                                />Choose file</label>
                            </div>
                        </div>
                        {/* <div className="form-group">



                            <label id="upload-btn" >
                                <p><Image src={require('../../images/icons/upload-image.png')}
                                    style={{ width: "24px", height: "24px" }}
                                /> Upload project file</p>
                            </label>
                            <input id="files"
                                style={{ visibility: 'hidden' }}
                                type="file" />

                        </div> */}

                        <button type="submit" className="btn btn-primary">Send</button>


                    </form>

                </div>
            </section>
        </section >
    );
};

export default Order;