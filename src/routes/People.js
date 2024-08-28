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
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import raymond from './Dr-Raymond.jpg';
import ayokunle from './Dr_ayokunle.jpeg';
import abdultaofeek from './Dr_Abdultaofeek Abayomi.jpg';
import badejo from './Dr_Badejo.jpeg';
import ejidokun from './dr-ejidokun.jpeg';
import thakur from './Dr-Thakur1.jpeg';
import adeshina from './dr-adeshina.jpg';
import popoola from './dr-popoola.jpeg';
import subusisoMoyo from './prof-subusiso-moyo.jpeg';
import maissaMbaye from './prof-maissa-mbaye.jpeg';
import dameDiongue from './prof-dame-diong.jpeg';
import ayodejiAdegoke from './Ayodeji Adegoke.jpg';
import takengaClaude from './Takenga Claude Mbusa.png';
import bankeOgunlana from './Banke Ogunlana Passport.jpg';


import { Height } from '@mui/icons-material';


function People() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '40vh' }} />
        <h2>PEOPLE</h2>
      </div>

      <div className="team-section">
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Core Implementation Team</span>
          <hr className="line" />
        </div>
        <br />
        <div className="team-container-prof">

          <div className="team-member-prof">
            <a href="https://scholar.google.com/citations?user=3LTdUs0AAAAJ&hl=en" className="team-link" target="_blank">
              <img src={group2} alt="Adetiba" className="team-icon-prof" />

            </a>
            <p className="role">Prof. E. Adetiba</p>
            <p className="name">Founding Principal Investigator</p>

            <div className="people-contact" >
              <a className="people-contact" href="https://scholar.google.com/citations?user=3LTdUs0AAAAJ&hl=en" target="_blank" >
                <FaGoogle size={17} />
              </a>

              <a className="people-contact" href="https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/" target="_blank" >
                <FaLinkedin size={17} />
              </a>
            </div>


          </div>
        </div>

        <div className="team-container">

          <div className="team-member">
            <a href="https://archive2.covenantuniversity.edu.ng/Profiles/Akanle-Matthew-Boladele" className="team-link" target="_blank">
              <img src={group3} alt="Mr John" className="team-icon team-icon-prof" />
            </a>
            <p className="role">Engr. Matthew Boladele AKANLE</p>
            <p className="name">Lead System Engineer</p>


            <div className="people-contact" >

              <a className="people-contact" href="https://www.linkedin.com/in/matthew-boladele-akanle-1431a2117/" target="_blank" >
                <FaLinkedin size={17} />
              </a>
            </div>



          </div>


          <div className="team-member">
            <a href="https://www.linkedin.com/in/priscilla-ajayi/" className="team-link" target="_blank">
              <img src={group4} alt="Priscilla Ajayi" className="team-icon team-icon-prof" />
            </a>
            <p className="role">Mrs Priscilla O. AJAYI</p>
            <p className="name">Lead Software Developer</p>

            <div className="people-contact" >

              <a className="people-contact" href="https://www.linkedin.com/in/priscilla-ajayi/" target="_blank" >
                <FaLinkedin size={17} />
              </a>
            </div>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117" className="team-link" target="_blank">
              <img src={group1} alt="Mrs. Sweetwilliams" className="team-icon team-icon-prof" />
            </a>
            <p className="role">Engr. (Mrs) Olubunmi F. Sweetwilliams</p>
            <p className="name">System Engineer</p>

            <div className="people-contact" >

              <a className="people-contact" href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117" target="_blank" >
                <FaLinkedin size={17} />
              </a>
            </div>
          </div>


          <div className="team-member">
            <a href="https://www.linkedin.com/in/john-wejin-431141112/" className="team-link" target="_blank">
              <img src={group6} alt="Mr John" className="team-icon team-icon-prof" />
            </a>
            <p className="role">John Wejin</p>
            <p className="name">System Engineering Intern</p>

            <div className="people-contact" >

              <a className="people-contact" href="https://www.linkedin.com/in/john-wejin-431141112/" target="_blank" >
                <FaLinkedin size={17} />
              </a>
            </div>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/uche-josiah-47386618b/" className="team-link">
              <img src={group7} alt="Mr Uche" className="team-icon team-icon-prof" />
            </a>
            <p className="role">Uche J. Nnaji</p>
            <p className="name">System Engineering Intern </p>

            <div className="people-contact">
              <a className="people-contact" href="https://www.linkedin.com/in/uche-josiah-47386618b/" target="_blank" >
                <FaLinkedin size={16} />
              </a>
            </div>

          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/" className="team-link">
              <img src={group5} alt="Festus Ojesanmi" className="team-icon team-icon-prof" />
            </a>
            <p className="role">Festus Ojesanmi</p>
            <p className="name"> Software Development Intern</p>
            <div className="people-contact">
              <a className="people-contact" href="https://www.linkedin.com/in/festusojesanmi/" target="_blank" >
                <FaLinkedin size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>




      <div className="team-section">

        <br />
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Co-investigators</span>
          <hr className="line" />
        </div>
        <br />


        <div className="team-container-coinvestigator" style={{ display: "flex" }}>

          <div className="team-member">
            <img src={oshin} alt="Mr John" className="team-icon" />
            <p className="role">Dr. Oluwadamilola Oshin</p>
            <p className="name">Coordinator, ASPMIR Group and AI for Biomedical Signal Processing (AI4BSP) Working Group. Covenant University, Ota, Ogun State, Nigeria</p>

            <div className="people-contact">
              <a className="people-contact" href=" https://www.linkedin.com/in/oluwadamilola-oshin-ph-d-72201448/" target="_blank" >
                <FaLinkedin size={16} />
              </a>
            </div>

          </div>


          <div className="team-member">

            <img src={idowu} alt="Priscilla Ajayi" className="team-icon" />

            <p className="role">DR. OLABODE IDOWU-BISMARK</p>
            <p className="name">Coordinator, AI for Communications Systems, Cloud & High Performance Computing (AI4ComSys and CHPC) Working Group. Covenant University, Ota, Ogun State, Nigeria</p>

            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

        </div>

        <div className="team-container">

          <div className="team-member">
            <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117">
              <img src={funmi} alt="Mrs. Sweetwilliams" className="team-icon" />
            </a>
            <p className="role">Dr. Funmilayo Sijuade Moninuola</p>
            <p className="name">Covenant University, Ota,<br /> Ogun State, Nigeria</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>

          </div>


          <div className="team-member">
            <a href="https://www.linkedin.com/in/john-wejin-431141112/">
              <img src={temi} alt="Mr John" className="team-icon" />
            </a>
            <p className="role">Dr. Temitope Oluwatosin Takpor</p>
            <p className="name">Covenant University, Ota, <br /> Ogun State, Nigeria</p>

            <div className="people-contact">
              <a className="people-contact" href="https://scholar.google.com/citations?hl=en&user=IqEKNhAAAAAJ" target="_blank">
                <FaGoogle size={17} />
              </a>

              <a className="people-contact" href="https://www.linkedin.com/in/obiseye-obiyemi-b2b2706a/" target="_blank">
                <FaLinkedin size={17} />
              </a>
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/uche-josiah-47386618b/">
              <img src={obiyemi} alt="obiyemi" className="team-icon" />
            </a>
            <p className="role">Dr. Obiseye Obiyemi</p>
            <p className="name">Durban University of Technology <br /> Durban, South Africa </p>

            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>

          </div>


        </div>
      </div>


      <div className="team-section">

        <br />
        <br />
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Research Collaborators</span>
          <hr className="line" />
        </div>
       
        <div className="team-container">
          <div className="team-member">
            <img src={badejo} alt="Dr. Joke A. Badejo" className="team-icon" />
            <p className="role">Dr. Joke A. Badejo</p>
            <p className="name">University of Kent, Canterbury, United Kingdom</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>



          <div className="team-member">
            <a href="https://www.linkedin.com/in/sweetwilliams-faith-54ab74117">
              <img src={raymond} alt="Dr. Raymond Jule Kala" className="team-icon" />
            </a>
            <p className="role">Dr. Raymond Jule Kala</p>
            <p className="name">International University of Grand Bassam, Ivory Coast</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/john-wejin-431141112/">
              <img src={ayokunle} alt="Dr. Ayokunle A. Awelewa" className="team-icon" />
            </a>
            <p className="role">Dr. Ayokunle A. Awelewa</p>
            <p className="name">Covenant University, Ota, Nigeria</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/uche-josiah-47386618b/">
              <img src={dameDiongue} alt="Prof. Dame Diongue" className="team-icon" />
            </a>
            <p className="role">Prof. Dame Diongue</p>
            <p className="name">Gaston Berger University, St Louis, Senegal</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={abdultaofeek} alt="Dr. Abdultaofeek Abayomi" className="team-icon" />
            </a>
            <p className="role">Dr. Abdultaofeek Abayomi</p>
            <p className="name">Mangosuthu University of Technology, Durban, South Africa</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={ejidokun} alt="Dr. Eyitayo Ejidokun" className="team-icon" />
            </a>
            <p className="role">Dr. Eyitayo Ejidokun</p>
            <p className="name">Afe Babalola University, Ado-Ekiti, Nigeria</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={popoola} alt="Dr. Segun Popoola" className="team-icon" />
            </a>
            <p className="role">Dr. Segun Popoola</p>
            <p className="name">Anglia Ruskin University, Cambridge, United Kingdom</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={adeshina} alt="Dr. Tolulope Adeshina" className="team-icon" />
            </a>
            <p className="role">Dr. Tolulope Adeshina</p>
            <p className="name">The University of British Columbia, Canada</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={maissaMbaye} alt="Prof. Maissa Mbaye" className="team-icon" />
            </a>
            <p className="role">Prof. Maissa Mbaye</p>
            <p className="name">Gaston Berger University, Senegal</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={thakur} alt="Prof. Surendra Thakur" className="team-icon" />
            </a>
            <p className="role">Prof. Surendra Thakur</p>
            <p className="name">KZN eSkills CoLab, Durban University of Technology, South Africa</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={subusisoMoyo} alt="Prof. Sibusiso Moyo" className="team-icon" />
            </a>
            <p className="role">Prof. Sibusiso Moyo</p>
            <p className="name">Stellenbosch University, South Africa</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={takengaClaude} alt="Prof. Claude Takenga" className="team-icon" />
            </a>
            <p className="role">Prof. Claude Takenga</p>
            <p className="name">Université Libre des Pays des Grands Lacs(ULPGL), Goma, Democratic Republic of Congo/Infokom GmbH, Germany</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>

          <div className="team-member">
            <a href="https://www.linkedin.com/in/festusojesanmi/">
              <img src={bankeOgunlana} alt="Prof. Olubanke Ogunlana" className="team-icon" />
            </a>
            <p className="role">Prof. Olubanke Ogunlana</p>
            <p className="name">Covenant University, Ota, Nigeria</p>
            <div className="people-contact">
              <FaGoogle size={16} />
              <FaLinkedin size={16} />
            </div>
          </div>


        </div>
      </div>




      <div className="student-team-section">
        <br />
        <br />
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Postdocs/Ph.Ds</span>
          <hr className="line" />
        </div>
        
        <div className="student-team-container">
          <div className="student-team-member">
            
            <p className="role">Dr. Obiseye Obiyemi</p>
            <p className="name">Postdoctoral Fellow (2020-2021), <br /> Durban University of Technology,<br /> Durban, South Africa.</p>
            
          </div>



          <div className="student-team-member">
           
            <p className="role">Akinrinmade Adekunle</p>
            <p className="name">Ph.D in Computer Engineering <br />Completed (2023), Covenant University, <br />Ota, Nigeria</p>
            
          </div>

          <div className="student-team-member">
            
            <p className="role">Funmilayo Moninuola</p>
            <p className="name">Ph.D in ICE Completed (2023), <br /> Covenant University, Ota, Nigeria.</p>
            
          </div>

          <div className="student-team-member">
            
            <p className="role">Temitope Takpor</p>
            <p className="name">Ph.D in ICE Completed (2023), <br /> Covenant University, Ota, Nigeria.</p>
            
          </div>

          <div className="student-team-member">
          
            <p className="role">Dr. Abdultaofeek Abayomi</p>
            <p className="name">Mangosuthu University of Technology,<br /> Durban, South Africa</p>
           
          </div>

          <div className="student-team-member">
            
            <p className="role">Dele Wasiu Alausa</p>
            <p className="name">Ph.D Viva-Voce in Computer Engineering <br />Completed,  Covenant University, <br />Ota, Nigeria.</p>
           
          </div>

          <div className="student-team-member">
           
            <p className="role">Adebiyi Adelakun</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            
          </div>

          <div className="student-team-member">
            
            <p className="role">Ayodele H. Ifijeh (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            
          </div>

          <div className="student-team-member">
           
            <p className="role">Comfort O. Lawal (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
           
          </div>

          <div className="student-team-member">
            
            <p className="role">Omolola Ademola (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
           
          </div>

          <div className="student-team-member">
            
            <p className="role">Comfort Some-fun (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
           
          </div>

          <div className="student-team-member">
           
            <p className="role">Gabriel Sobola (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            
          </div>

          <div className="student-team-member">
            
            <p className="role">Uche J. Nnaji(FEDGEN Scholar)</p>
            <p className="name">Ph.D in Computer Science <br /> Ongoing at Covenant University,<br /> Ota, Nigeria.</p>
            
          </div>


        </div>
      </div>


      <div className="student-team-section">
  <br />

  <div className="divider-container">
    <hr className="line" />
    <span className="text">Industry/Clinical Experts</span>
    <hr className="line" />
  </div>

  <div className="student-team-container">
    <div className="student-team-member">
      <p className="role">Engr. Boladele Akanle</p>
      <p className="name">Lead System & Cloud Infrastructure Engineering</p>
    </div>

    <div className="student-team-member">
      <p className="role">Mrs. Priscilla O. Ajayi</p>
      <p className="name">Lead Software and DevOps Engineering</p>
    </div>

    <div className="student-team-member">
      <p className="role">Engr. (Mrs.) Faith O. Sweetwilliams</p>
      <p className="name">System & Cloud Infrastructure Engineer</p>
    </div>

    <div className="student-team-member">
      <p className="role">Engr. Emmanuel Owolabi</p>
      <p className="name">Telecommunication Engineer</p>
    </div>

    <div className="student-team-member">
      <p className="role">Dr. Ademola Adeyeye (MBBS)</p>
      <p className="name">Medical Advisor</p>
    </div>
  </div>
</div>


<div className="student-team-section">
  <br />
  <br />
  <div className="divider-container">
    <hr className="line" />
    <span className="text">Interns</span>
    <hr className="line" />
  </div>

  <div className="student-team-container">
    <div className="student-team-member">
      <p className="role">John S. Wejin</p>
      <p className="name">System & Cloud Engineering Intern</p>
    </div>

    <div className="student-team-member">
      <p className="role">Uche J. Nnaji</p>
      <p className="name">Software Development Intern</p>
    </div>

    <div className="student-team-member">
      <p className="role">Festus Ojesanmi</p>
      <p className="name">Software Development Intern</p>
    </div>

    <div className="student-team-member">
      <p className="role">Blessing Adekunle</p>
      <p className="name">Web/Software Development Intern</p>
    </div>

    <div className="student-team-member">
      <p className="role">Ayoola Akindele</p>
      <p className="name">Embedded System Development Intern</p>
    </div>

    <div className="student-team-member">
      <p className="role">Victor Akanle</p>
      <p className="name">Software Development Intern</p>
    </div>
  </div>
</div>

    </>





  );
}

export default People;
