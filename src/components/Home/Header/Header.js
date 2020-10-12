import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMain from '../NavbarMain/NavbarMain';

const Header = () => {
    return (
        <div className="header-container">
            <NavbarMain />
            <HeaderMain />
        </div>
    );
};

export default Header;