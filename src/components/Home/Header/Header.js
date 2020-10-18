import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMain from '../NavbarMain/NavbarMain';
import './Header.css'
import { Image } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div id="header-container">
                <NavbarMain />
                <HeaderMain />
            </div>
            <div id="header-triangle"></div>

            <div id="partners" className="row d-flex align-items-center">
                <div className="col-md-12 col-12 col-sm-12 offset-md-1">
                    <div className="row" id="header-img">
                        <div className="col-2 col-md-2 col-sm-3"><Image fluid src={require('../../../images/logos/slack.png')} /></div>
                        <div className="col-2 col-md-2 col-sm-3"><Image fluid src={require('../../../images/logos/google.png')} /></div>
                        <div className="col-2 col-md-2 col-sm-3"><Image fluid src={require('../../../images/logos/uber.png')} /></div>
                        <div className="col-2 col-md-2 col-sm-3"><Image fluid src={require('../../../images/logos/netflix.png')} /></div>
                        <div className="col-2 col-md-2 col-sm-3"><Image fluid src={require('../../../images/logos/airbnb.png')} /></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;