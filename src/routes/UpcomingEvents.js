import React from 'react';
import "../App.css";
import containerImage from './Container-image.png';

function UpcomingEvents(){

    return (
        <div className="central">
            <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '48vh' }}/>
            <h2>UPCOMNING EVENTS</h2>
        </div>

    );


}


export default UpcomingEvents;