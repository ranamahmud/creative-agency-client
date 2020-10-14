import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import NavbarMain from '../Home/NavbarMain/NavbarMain';

const Order = () => {
    const [info, setInfo] = useState({});
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

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {
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
            <div className="row"><NavbarMain /></div>

            <section className="container-fluid row">

                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">

                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">

                            <textarea onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Project Details" />
                        </div>
                        <div className="form-group">

                            <textarea onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Price" />
                        </div>
                        <div className="form-group">
                            {/* <input onChange={handleFileChange} type="file" className="form-control" id="fileUpload" /> */}

                            <label for="files" class="btn">Upload project file</label>
                            <input id="files"
                                style={{ visibility: 'hidden' }}
                                type="file" />

                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>


                    </form>

                </div>
            </section>
        </section>
    );
};

export default Order;