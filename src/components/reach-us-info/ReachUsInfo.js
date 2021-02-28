import React from 'react';

import './ReachUsInfo.scss';
import './responsive_ReachUsInfo.scss'

const ReachUsInfo = () => {
    return (
        <div className="reach-us-section d-flex justify-content-center">
            <div className="reach-us-subsection-text d-flex ">
                <div className="reach-us-text">
                    <h1 className='reach-us-title'>
                        Seamless Team Workflow & Efficient Task Management
                    </h1>

                    <h4 className='reach-us-info-description'>
                        Do you waste time organizing sticky notes, searching your email and apps
                        for to-dos, and figuring out what to work on first? Then you need one
                        solution to prioritize your tasks, manage your time, and meet your deadlines.
                    </h4>
                </div>
                <div className="download-buttons">
                    <img src="./assets/images/app-store.png" alt="" height='55px'/>
                    <img src="./assets/images/play-store.png" alt="" height='55px'/>
                </div>
            </div>

            <div className='reach-us-subsection-image'>
                <img src="./assets/images/app-reach-us.png" height='509px' alt=""/>
            </div>
        </div>
    );
};

export default ReachUsInfo;