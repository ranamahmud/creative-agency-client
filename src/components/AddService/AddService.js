import React from 'react';
import { Navbar } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    return (
        <section>
            <div className="row"><Navbar /></div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    {/* <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    /> */}
                    <h1>Add Service</h1>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}
                </div>
            </div>
        </section>
    );
};

export default AddService;