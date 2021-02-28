import React from 'react';
import Button from "../button/Button";

import './Footer.scss';
import './responsive_Footer.scss';

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-center align-items-center">
            <h2>Get better work done</h2>
            <h4>See why millions of people across 195 countries use Dash.</h4>
            <div className="footer-subscribe">
                <input type='text' className='subscribe-input' placeholder='Name@company.com'/>
                <Button buttonText='Try it free'/>
            </div>
        </div>
    );
};

export default Footer;