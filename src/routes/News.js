import React from 'react';
import "../App.css";
import containerImage from './Container-image.png';

function News(){

    return (
        <div className="central">
            <img src={containerImage} alt="My Local Image" className="right-image"/>
            <h1>News</h1>
        </div>

    );


}

export default News;