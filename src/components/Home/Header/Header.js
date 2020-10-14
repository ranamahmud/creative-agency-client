import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMain from '../NavbarMain/NavbarMain';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div id="header-container">
                <NavbarMain />
                <HeaderMain />
            </div>
            <div id="header-triangle"></div>
        </div>
    );
};

export default Header;