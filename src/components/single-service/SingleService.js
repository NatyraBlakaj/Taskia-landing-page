import React from 'react';

import './SingleService.scss';

const SingleService = (props) => {
    return (
        <div className='single-service-section d-flex justify-content-center align-items-center'
             style={{background: props.background, marginTop: props.marginTop}}>
            <img src={props.path} alt=""/>
            <div className="details" style={{color: props.text}}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default SingleService;