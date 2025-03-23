import React from 'react';
import "../App.css";
import containerImage from '../images/Container-image.png';
import fedgenHealthEduApp from '../images/Fedgen-HealthEduApp.jpeg';
import fedgenDatahub from '../images/FEDGEN Datahub.png';
import fedgenCodinghub from '../images/FEDGEN-Codinghub.png';
import fedgenMonitor from '../images/Fegden-monitor.png';
import fedsec from '../images/FEDSEC.png';
import cognitiveCloudRAN from '../images/Cognitive CloudRAN.png';
import edgeAI from '../images/EDGE-AI.png';

function Project() {
    const projects = [
        { title: 'FEDGEN PHIS', image: fedgenHealthEduApp, link: 'https://fedgen.net/phis', description: 'FEDGEN public health information system' },
        { title: 'FEDGEN DataHub', image: fedgenDatahub, description: 'FEDGEN DataHub' },
        { title: 'FEDGEN CodingHub', image: fedgenCodinghub, link: 'http://codinghub.fedgen.net', description: 'FEDGEN CodingHub' },
        { title: 'FEDARGOS', image: fedgenMonitor, link: 'http://monitor.fedgen.net', description: 'FEDGEN Monitor' },
        { title: 'SEC-FEDGEN', image: fedsec, link: 'http://localhost:3000/fedgen-landing-page#/FedSec', description: 'FEDSEC' },
        { title: 'Cognitive CloudRAN for TVWS/5G/6G', image: cognitiveCloudRAN, link: 'http://localhost:3000/fedgen-landing-page#/CloudRAN', description: 'CloudRAN' },
        { title: 'EdgeAI-IoT for Health Applications', image: edgeAI, link: 'http://localhost:3000/fedgen-landing-page#/EdgeAI', description: 'EdgeAI-IoT' },
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
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-title">{project.title}</div>
                            </a>
                        ) : (
                            <div>
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-title">{project.title}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Project;
