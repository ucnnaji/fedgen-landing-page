import React from 'react';
import "../App.css";
import containerImage from './Container-image.png';

function UpcomingEvents(){

    return (
        <div className="central">
            <img src={containerImage} alt="My Local Image" className="right-image"/>
            <h1>UPCOMNING EVENTS</h1>
        </div>

    );


}


export default UpcomingEvents;