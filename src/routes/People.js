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
import group2 from './group2.jpeg';
import group7 from './group7.jpg';
import group1 from './group1.png';

const contacts = [

      {
    name: 'PROF. EMMANUEL ADETIBA',
    role: 'Founding Principal Investigator',
    image:group2,
    title:'Ph.D, R.Engr.(COREN), MIEEE, MIITPSA',
    infoLink: 'https://example.com/johndoe-info',
    googleLink: 'mailto:johndoe@example.com',
    linkedinLink: 'https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/'
  },

  {
    name: 'Engr. Matthew Boladele AKANLE',
    role: 'Lead System Engineer',
    image:group3,
    infoLink: '#',
    googleLink: 'mailto:johndoe@example.com',
    linkedinLink: 'https://archive2.covenantuniversity.edu.ng/Profiles/Akanle-Matthew-Boladele'
  },

  {
    name: 'Mrs Priscilla O. AJAYI',
    role: 'Lead Software Developer',
    email: 'janesmith@example.com',
    image: group4,
    linkedinLink: 'https://www.linkedin.com/in/priscilla-ajayi/',
    infoLink: 'https://example.com/johndoe-info',
  },
  

  {
    name: 'Engr. (Mrs) Olubunmi F. Sweetwilliams ',
    role: 'System Engineer',
    image: Sweets,
    infoLink: 'https://example.com/johndoe-info',
    googleLink: 'mailto:johndoe@example.com',
    linkedinLink: 'https://www.linkedin.com/in/sweetwilliams-faith-54ab74117'
  },

  {
    name: 'John Wejin',
    role: 'Software Engineering Intern', 
    email: 'janesmith@example.com',
    image: group6,
    linkedinLink: 'https://www.linkedin.com/in/john-wejin-431141112/',
    infoLink: 'https://example.com/johndoe-info',
  },

  {
    name: 'Uche J. Nnaji',
    role: 'Software Engineering Intern',
    email: 'janesmith@example.com',
    image: group7,
    linkedinLink: 'https://www.linkedin.com/in/uche-josiah-47386618b/',
    infoLink: 'https://example.com/johndoe-info',
  },


  {
    name: 'Festus Ojesanmi',
    role: 'Software Developer',
    email: 'janesmith@example.com',
    image: group5,
    linkedinLink: 'https://www.linkedin.com/in/festusojesanmi/',
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
