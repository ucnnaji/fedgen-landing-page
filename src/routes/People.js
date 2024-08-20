import React from 'react';
import '../App.css';
import containerImage from './Container-image.png';
import ContactGrid from './ContactGrid'; // Import the ContactGrid component
import ProfileCard from './ProfileCard';
import Sweets from './group1.png';
import group3 from './group3.png';
import group6 from './group6.jpeg';
import group5 from './group5.jpeg';
import group4 from './group4.jpeg';
import group2 from './group2.jpeg';
import group7 from './group7.jpg';
import group1 from './group1.png';
import oshin from './Dr Osin.jpg';
import idowu from './DR.OLABODE-IDOWU.jpeg';
import funmi from './dr-funmilayo-sijuade.jpeg';
import obiyemi from './Obiyemi Obiseye.jpg';
import temi from './dr-temitope-oluwatosin.jpeg';

import { Height } from '@mui/icons-material';


function People() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" />
        <h1>PEOPLE</h1>
      </div>

      <div className="team-section">
        <div className="team-container-prof">

          <div className="team-member-prof">
            <a href="https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/">
              <img src={group2} alt="Adetiba" className="team-icon-prof" />
            </a>
            <p className="role">Prof. E. Adetiba</p>
            <p className="name">Founding Principal Investigator</p>
            <hr />
          </div>
        </div>

        <div className="team-container">

          <div className="team-member">
            <a href="https://archive2.covenantuniversity.edu.ng/Profiles/Akanle-Matthew-Boladele">
              <img src={group3} alt="Mr John" className="team-icon" />
            </a>
            <p className="role">Engr. Matthew Boladele AKANLE</p>
            <p className="name">Lead System Engineer</p>

          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/priscilla-ajayi/">
              <img src={group4} alt="Priscilla Ajayi" className="team-icon" />
            </a>
            <p className="role">Mrs Priscilla O. AJAYI</p>
            <p className="name">Lead Software Developer</p>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117">
              <img src={group1} alt="Mrs. Sweetwilliams" className="team-icon" />
            </a>
            <p className="role">Engr. (Mrs) Olubunmi F. Sweetwilliams</p>
            <p className="name">System Engineer</p>

          </div>


          <div className="team-member">
            <a href="https://www.linkedin.com/in/john-wejin-431141112/">
              <img src={group6} alt="Mr John" className="team-icon" />
            </a>
            <p className="role">John Wejin</p>
            <p className="name">System Engineering Intern</p>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/uche-josiah-47386618b/">
              <img src={group7} alt="Mr Uche" className="team-icon" />
            </a>
            <p className="role">Uche J. Nnaji</p>
            <p className="name">System Engineering Intern </p>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={group5} alt="Festus Ojesanmi" className="team-icon" />
            </a>
            <p className="role">Festus Ojesanmi</p>
            <p className="name"> Software Development Intern</p>

          </div>
        </div>
      </div>


      <div className="team-section">

                <div>
                  <h2>Co-investigators</h2>
                  <br />
                </div>

        
        <div className="team-container">

                  <div className="team-member">
                          <img src={oshin} alt="Mr John" className="team-icon"/>
                          <p className="role">Dr. Oluwadamilola Oshin</p>
                          <p className="name">Coordinator, ASPMIR Group and AI for Biomedical Signal Processing (AI4BSP) Working Group. Covenant University, Ota, Ogun State, Nigeria</p>

                  </div>

        
          
          <div className="team-member">
              
              <img src={idowu} alt="Priscilla Ajayi" className="team-icon" />
              
              <p className="role">DR. OLABODE IDOWU-BISMARK</p>
              <p className="name">Coordinator, AI for Communications Systems, Cloud & High Performance Computing (AI4ComSys and CHPC) Working Group. Covenant University, Ota, Ogun State, Nigeria</p>

          </div>

          </div>

        <div className="team-container">

          <div className="team-member">
            <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117">
              <img src={funmi} alt="Mrs. Sweetwilliams" className="team-icon" />
            </a>
            <p className="role">Dr. Funmilayo Sijuade Moninuola</p>
            <p className="name">Covenant University, Ota, Ogun State, Nigeria</p>

          </div>


          <div className="team-member">
            <a href="https://www.linkedin.com/in/john-wejin-431141112/">
              <img src={temi} alt="Mr John" className="team-icon" />
            </a>
            <p className="role">Dr. Temitope Oluwatosin Takpor</p>
            <p className="name">Covenant University, Ota, Ogun State, Nigeria</p>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/uche-josiah-47386618b/">
              <img src={obiyemi} alt="Mr Uche" className="team-icon" />
            </a>
            <p className="role">Dr. Obiseye Obiyemi</p>
            <p className="name">Durban University of Technology, Durban, South Africa </p>

          </div>

          
        </div>
      </div>



      <div className="team-section">

        <div>
          <h2>Co-Collaborators</h2>
        </div>
        <div className="team-container-prof">

          <div className="team-container">

            <div className="team-member">

              <img src={group3} alt="Mr John" className="team-icon" />
              <p className="role">Dr. Oluwadamilola Oshin</p>
              <p className="name">Coordinator, ASPMIR Group and AI for Biomedical Signal Processing (AI4BSP) Working Group. Covenant University, Ota, Ogun State, Nigeria</p>

            </div>


            <div className="team-member">
              <a href="https://www.linkedin.com/in/priscilla-ajayi/">
                <img src={group4} alt="Priscilla Ajayi" className="team-icon" />
              </a>
              <p className="role">Mrs Priscilla O. AJAYI</p>
              <p className="name">Lead Software Developer</p>

            </div>

            <div className="team-member">
              <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117">
                <img src={group1} alt="Mrs. Sweetwilliams" className="team-icon" />
              </a>
              <p className="role">Engr. (Mrs) Olubunmi F. Sweetwilliams</p>
              <p className="name">System Engineer</p>

            </div>


            <div className="team-member">
              <a href="https://www.linkedin.com/in/john-wejin-431141112/">
                <img src={group6} alt="Mr John" className="team-icon" />
              </a>
              <p className="role">John Wejin</p>
              <p className="name">System Engineering Intern</p>

            </div>

            <div className="team-member">
              <a href="https://www.linkedin.com/in/uche-josiah-47386618b/">
                <img src={group7} alt="Mr Uche" className="team-icon" />
              </a>
              <p className="role">Uche J. Nnaji</p>
              <p className="name">System Engineering Intern </p>

            </div>

            <div className="team-member">
              <a href="https://www.linkedin.com/in/festusojesanmi/">
                <img src={group5} alt="Festus Ojesanmi" className="team-icon" />
              </a>
              <p className="role">Festus Ojesanmi</p>
              <p className="name"> Software Development Intern</p>

            </div>
          </div>
        </div>

      </div>







      </>
      );
}

      export default People;
