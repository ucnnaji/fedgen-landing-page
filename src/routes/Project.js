import React from 'react';
import "../App.css";

import containerImage from './Container-image.jpg';

function Project() {
    const projects = [
        { title: 'FEDGEN Health EduApp', image: 'Fedgen-HealthEduApp.jpeg', link: 'https://ace-partner.org/dstn/en/projet/fedgen-healtheduapp/', description: 'FEDGEN Health EduApp' },
        { title: 'FEDGEN Monitor', image: 'Fegden-monitor.png', link: 'https://fedgen.net/phis/read/fedmonitor-an-implementation-architecture-for-monitoring-of-resources-and-events-notifications-on-federated-cloud-computing-infrastructures', description: 'FEDGEN Monitor' },
    ];

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>PROJECTS</h2>
            </div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link}>
                            <img src={require(`../images/${project.image}`)} alt={project.title} className="project-image" />
                            <div className="project-title">{project.title}</div>
                        </a>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Project;
