import React from 'react';
import SingleService from "../single-service/SingleService";

import './OurServicesInfo.scss';
import './responsice_OurServicesInfo.scss';

const OurServicesInfo = () => {
    return (
        <div className="serviesInfo">
            <h1 className='services-title'>Featured Service that We Provide</h1>
            <div className='services-container d-flex justify-content-center'>
                <SingleService
                    path="./assets/images/service-1.svg"
                    background='#525FFB'
                    title='Keep tasks in one place'
                    description='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                    marginTop='0'
                    text='#FFF'
                />
                <SingleService
                    path="./assets/images/service-2.svg"
                    background='#E9F0FF'
                    title='Keep tasks in one place'
                    description='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                    marginTop='4%'
                    text='#000'
                />
                <SingleService
                    path="./assets/images/service-3.svg"
                    background='#FFE7AA'
                    title='Keep tasks in one place'
                    description='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                    marginTop='1%'
                    text='#000'
                />
            </div>
        </div>
    );
};

export default OurServicesInfo;