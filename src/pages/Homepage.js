import React from 'react';

import Header from "../components/header/Header";
import HomeInfo from "../components/homeInfo/Home-Info";
import OurServicesInfo from "../components/our-services-info/OurServicesInfo";
import ImagesServiceSection from "../components/images-service-section/ImagesServiceSection";
import Footer from "../components/footer/Footer";
import ReachUsInfo from "../components/reach-us-info/ReachUsInfo";
import LearnMoreInfo from "../components/learn-more-info/LearnMoreInfo";

import './Homepage.scss';

import {fadeIn, slideInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    slideInRight: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}

const Homepage = () => {
    return (
        <div className='page' style={{backgroundImage: "url('/assets/images/app-background.png')"}}>
            <StyleRoot style={styles.slideInRight}>
                <Header/>
            </StyleRoot>

            <StyleRoot style={styles.fadeIn}>
                <HomeInfo/>
                <OurServicesInfo/>
                <LearnMoreInfo/>
                <ReachUsInfo/>
                <ImagesServiceSection/>
                <Footer/>
            </StyleRoot>
        </div>
    );
};

export default Homepage;