import React from 'react';
import NavbarMain from '../../Home/NavbarMain/NavbarMain';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="row"><NavbarMain /></div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    {/* <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    /> */}
                    <h1>Main</h1>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;