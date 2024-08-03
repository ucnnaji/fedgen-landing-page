import React from 'react';
import '../App.css';
import containerImage from './Container-image.png';
import ContactGrid from './ContactGrid'; // Import the ContactGrid component
import ProfileCard from './ProfileCard';
import Sweets from './Sweets.png';
import group3 from './group3.png';
import group6 from './group6.png';
import group5 from './group5.jpeg';
import group4 from './group4.jpeg';
import group2 from './group2.jpg';
import group1 from './group1.png';

const contacts = [

    {
        name: 'Engr M. Boladele',
        role: 'Lead System Admin',
        title:'Lead System Engr.',
        image:group3,
        infoLink: 'https://example.com/johndoe-info',
        googleLink: 'mailto:johndoe@example.com',
        linkedinLink: 'https://linkedin.com/in/johndoe'
      },
  {
    name: 'PROF. EMMANUEL ADETIBA',
    role: 'Founding Principal Investigator',
    image:group2,
    title:'Ph.D, R.Engr.(COREN), MIEEE, MIITPSA',
    infoLink: 'https://example.com/johndoe-info',
    googleLink: 'mailto:johndoe@example.com',
    linkedinLink: 'https://linkedin.com/in/johndoe'
  },
  

  {
    name: 'Mrs SweetWilliams',
    role: 'Lead System Engineer',
    title:'System Engineer',
    image: Sweets,
    infoLink: 'https://example.com/johndoe-info',
    googleLink: 'mailto:johndoe@example.com',
    linkedinLink: 'https://linkedin.com/in/johndoe'
  },

  {
    name: 'Priscilla Ajayi',
    role: 'Lead Software Developer',
    title:'Software Developer',
    email: 'janesmith@example.com',
    image: group4,
    linkedinLink: 'https://linkedin.com/in/johndoe',
    infoLink: 'https://example.com/johndoe-info',
  },

  {
    name: 'Festus Ojesanmi',
    role: 'Software Developer',
    title:'Software Developer',
    email: 'janesmith@example.com',
    image: group5,
    linkedinLink: 'https://linkedin.com/in/johndoe',
    infoLink: 'https://example.com/johndoe-info',
  },

  {
    name: 'Mr John',
    role: 'System Admin Intern',
    title:'System Admin',
    email: 'janesmith@example.com',
    image: group6,
    linkedinLink: 'https://linkedin.com/in/johndoe',
    infoLink: 'https://example.com/johndoe-info',
  },
  // Add more contacts as needed
];

function People() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" />
        <h1>People</h1>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <ContactGrid contacts={contacts} />
      </div>
    </>
  );
}

export default People;
