import React from 'react';

import './ImageService.scss';
import './responsive_ImageService.scss';

const ImageService = (props) => {
    return (
        <div>
            <div id='image-section' className='image-service' style={{height: props.height, width: props.width, top: props.spacingTop, left: props.spacingLeft}}>
                <img src={props.image} height={props.height} alt=""/>
            </div>
        </div>
    );
};

export default ImageService;