import React from 'react';
import Button from "../button/Button";

import './LeanMoreInfo.scss';
import './responsive_LearnMoreInfo.scss';

const LearnMoreInfo = () => {
    return (
        <div className="learn-more-section d-flex justify-content-center">
            <div className="sub-section image-sub-section">
                <img src="./assets/images/learn_more.png" alt=""/>
            </div>
            <div className="sub-section text-sub-section">
                <h1 className='learn-more-title'>
                    Why do you need task management software?
                </h1>
                <h3>
                    Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring
                    out what to work on first? Then you need one solution to prioritize your tasks, manage your time,
                    and meet your deadlines.
                </h3>
                <div className="learn-more-btn">
                    <Button buttonText='Learn More'/>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreInfo;