import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src="./assets/images/app-logo.png" alt=""/>
            </div>
            <div className="try-free d-flex justify-content-center align-items-center ">
                <span>
                    Try free
                </span>
            </div>
        </div>
    );
};

export default Header;
