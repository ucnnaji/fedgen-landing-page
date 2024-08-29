import React, { useState } from 'react';
import "../App.css";
import containerImage from './Container-image.png';

function UpcomingEvents() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const projects = [
        {
            title: 'FEDGEN Health EduApp',
            image: 'Monthly-Research-August.jpg',
            link: 'https://ace-partner.org/dstn/en/projet/fedgen-healtheduapp/',
            description: 'FEDGEN Health EduApp'
        },
    ];

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage('');
    };

    return (
        <>
            <div className="Event-central">
                <img
                    src={containerImage}
                    alt="My Local Image"
                    className="Event-right-image"
                    style={{ height: '35vh' }}
                />

            </div>

            <div className="Event-events-container">
                {projects.map((project, index) => (
                    <div key={index} className="Event-project-card">
                        <img
                            src={require(`../images/${project.image}`)}
                            alt={project.title}
                            className="Event-project-image"
                            onClick={() => openModal(require(`../images/${project.image}`).default)}
                        />
                        <br />
                        <a href={project.link}>
                            <button className="Event-project-button">Register</button>
                        </a>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="Event-modal-overlay" onClick={closeModal}>
                    <div className="Event-modal-content">
                        <img src={currentImage} alt="Full screen" className="Event-full-screen-image" />
                    </div>
                </div>
            )}
        </>
    );
}

export default UpcomingEvents;
