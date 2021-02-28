import React from 'react';
import ImageService from "../image-service/ImageService";

import './ImagesServiceSection.scss';
import './responsive_ImagesServicesSection.scss';

const ImagesServiceSection = () => {
    return (
        <div>
            <h1 className='services-info-title'>Trust us and feel free to try our service</h1>
            <div className='images-section d-flex align-items-center'>
                <div className="images-sub-section left-images-section">
                    <ImageService
                        image='./assets/images/employe-service-2.png'
                        spacingTop='33px'
                        spacingLeft='157px'
                        height='273px'
                        width='182px'/>
                    <ImageService
                        image='./assets/images/employe-service-1.png'
                        spacingTop='276px'
                        spacingLeft='379px'
                        height='173px'
                        width='118px'/>
                    <ImageService
                        image='./assets/images/employe-service-2.png'
                        spacingTop='515px'
                        spacingLeft='207px'
                        height='127px'
                        width='85px'/>
                </div>
                <div className='number-of-services d-flex justify-content-center align-items-center'>
                    <span className='services-number'>100 000</span>
                </div>
                <div className="images-sub-section right-images-section">
                    <ImageService
                        image='./assets/images/employe-service-1.png'
                        spacingTop='-5px'
                        spacingLeft='140px'
                        height='213px'
                        width='142px'/>
                    <ImageService
                        image='./assets/images/employe-service-1.png'
                        spacingTop='205px'
                        spacingLeft='-33px'
                        height='122px'
                        width='82px'/>
                    <ImageService
                        image='./assets/images/employe-service-2.png'
                        spacingTop='410px'
                        spacingLeft='100px'
                        height='273px'
                        width='182px'/>
                </div>
            </div>
        </div>
    );
};

export default ImagesServiceSection;