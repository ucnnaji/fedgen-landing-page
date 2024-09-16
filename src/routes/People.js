import React from 'react';
import '../App.css';
import containerImage from './Container-image.png';
import ContactGrid from './ContactGrid'; // Import the ContactGrid component
import ProfileCard from './ProfileCard';
import Coreteamsection from './Coreteamsection';

import { Height } from '@mui/icons-material';
import Coinvestigators from './Coinvestigators';
import Cocollaborators from './Cocollaborators';


function People() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
        <h2>PEOPLE</h2>
      </div>

      <br />
      <div className="divider-container">
        <hr className="line" />
        <span className="text">Core Implementation team</span>
        <hr className="line" />
      </div>
      <Coreteamsection />

      <br />
      <br />
      <br />

      <div className="divider-container">
        <hr className="line" />
        <span className="text">Coinvestigators</span>
        <hr className="line" />
      </div>
      <Coinvestigators />
      <br />
      <br />
      <br />

      <div className="divider-container">
        <hr className="line" />
        <span className="text">Cocollaborators</span>
        <hr className="line" />
      </div>
      <Cocollaborators />




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
            <p className="role">Victor Akunde</p>
            <p className="name">Software Development Intern</p>
          </div>
        </div>
      </div>

    </>





  );
}

export default People;
