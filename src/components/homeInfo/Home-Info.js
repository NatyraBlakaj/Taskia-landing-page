import React from 'react';
import Button from "../button/Button";

import './Home-Info.scss';
import './responsive_HomeInfo.scss';

const HomeInfo = () => {
    return (
        <div className="section d-flex justify-content-center">
            <div className="home-section-side d-flex align-items-center">
                <div className="home-info-text">
                    <h1 className='home-info-title'>
                        Task management and lists Tool
                    </h1>

                    <h4 className='home-info-description'>
                        We belive that designing products and services in close
                        partnership with our clients is the only
                        way to have a real impact on their bussines
                    </h4>

                    <div className="subscribe">
                        <input type='text' className='subscribe-input' placeholder='Name@company.com'/>
                        <Button buttonText='Try it free' />
                    </div>
                </div>

            </div>
            <div className='home-info-image home-section-side'>
                <img src="./assets/images/app-home-info.svg" alt=""/>
            </div>
        </div>
    );
};

export default HomeInfo;