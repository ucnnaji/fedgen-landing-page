import React, { useState } from 'react';
import "../App.css";
import containerImage from './Container-image.png';

function UpcomingEvents() {
   

    const projects = [
        {
            title: 'FEDGEN Health EduApp',
            image: 'Monthly-Research-August.jpg',
            link: 'https://covenantuniversity-edu-ng.zoom.us/meeting/register/tZYoc-CrqT8rHdRpv43l-TupAiite4dtAW7h',
            description: 'FEDGEN Health EduApp'
        },
    ];

   

    return (
        <>
            <div className="central">
                <img
                    src={containerImage}
                    alt="My Local Image"
                    className="right-image"
                    style={{ height: '35vh' }}
                />
                <h2>UPCOMING EVENTS</h2>
            </div>

            <div className="Event-events-container">
                {projects.map((project, index) => (
                    <div key={index} className="Event-project-card">
                        <img
                            src={require(`../images/${project.image}`)}
                            alt={project.title}
                            className="Event-project-image"
                         
                        />
                        <br />
                        <a href={project.link}>
                            <button className="Event-project-button">Register</button>
                        </a>
                    </div>
                ))}
            </div>

            
        </>
    );
}

export default UpcomingEvents;
