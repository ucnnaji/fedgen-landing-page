import React from 'react';
import containerImage from './Home-image.png';
import database from './database.png';
import server from './server.png';
import microchip from './microchip.png';
import computeEngine from './computeEngine.png';

import group6 from './group6.png';
import group5 from './group5.jpeg';
import group4 from './group4.jpeg';
import group3 from './group3.png';
import group2 from './group2.jpeg';
import group1 from './group1.png';
import group7 from './group7.jpg';

import aspmirlogo from './aspmir-logo.png';
import capiclogo from './capic-logo.png';
import covenantlogo from './covenant-logo.png';
import googlelogo from './google-logo.png';
import innaialogo from './innia-logo.png';
import dstnlogo from './dstn-logo.png';
import cealogo from './cea-logo.png';
import oafdlogo from './oafd-logo.png';
import { alignProperty } from '@mui/material/styles/cssUtils';


function Home() {
    return (
        <>
            <div className="Homecentral">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '1000px' }} />
                <div className="text-container">
                    <h1>FEDGEN Cloud</h1>
                    <h2>LEADING PLAYERS IN AFRICA'S SUPER COMPUTING MARKET.</h2>
                    <p id='home-text'>
                        Africa's most powerful supercomputer, spearheading the continent's scientific and
                        <br />
                        technological revolution, tackling unique challenges and advancing global innovation.
                    </p>
                </div>
            </div>

            <div className="container">
                <h1 className="title">What is FEDGEN Cloud?</h1>
                <p className="home-description">
                    The Federated Genomic (FEDGEN) cloud infrastructure, equipped with in-memory computing and cloud AI capabilities, is paving the way for informatics-based genomic research in Africa. This cutting-edge system is designed to enhance data sharing, analysis, and collaboration across the continent, addressing unique genetic research challenges and advancing precision medicine. FEDGEN's cloud infrastructure is revolutionizing genomic research in Africa by providing a robust platform for storing and analyzing vast amounts of genetic data. Its in-memory computing capabilities enable real-time data processing, allowing researchers to gain rapid insights into complex genetic information and accelerate the discovery of new treatments and therapies.
                </p>
                <div className="button-container">
                    <button className="request-button">Request Access</button>
                </div>
            </div>

            <div className="section">
                <h1 className="heading">Our Cloud Resource Capacity</h1>
                <p className="capdescription">
                    FEDGEN cloud infrastructure features high-performance nodes with up to 1.5 TB of RAM, multi-core processors such as 64-core Intel Xeon or AMD EPYC CPUs, and scalable storage solutions offering petabytes of NVMe SSDs. This robust capacity ensures real-time data processing, secure data sharing, and efficient analysis for groundbreaking genomic research in Africa.
                </p>
                <div className="card-container">
                    <div className="card">
                        <img src={microchip} alt="120 CPU Cores" className="icon" />
                        <h2>120</h2>
                        <p>CPU cores</p>
                    </div>
                    <div className="card">
                        <img src={server} alt="40/20 CPU/GPU Servers" className="icon" />
                        <h2>8</h2>
                        <p>GPU Servers</p>
                    </div>

                    <div className="card">
                        <img src={server} alt="40/20 CPU/GPU Servers" className="icon" />
                        <h2>18</h2>
                        <p>CPU Servers</p>
                    </div>
                    <div className="card">
                        <img src={database} alt="640 TB of Storage" className="icon" />
                        <h2>32</h2>
                        <p>TB of Combined Storage</p>
                    </div>
                    <div className="card">
                        <img src={computeEngine} alt="86 TB of RAM" className="icon" />
                        <h2>4</h2>
                        <p>TB of RAM</p>
                    </div>
                </div>
            </div>

            <div className="team-section">
                <h1 className="team-subheading">Team members</h1>

               
                <div className="team-container">
                    
                <div className="team-member">
                        <a href="https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/">
                            <img src={group2} alt="Engr Matthew Boladele" className="team-icon" />
                        </a>
                        <p className="role">Prof. E. Adetiba</p>
                        <p className="name">Founding PI</p>
                    </div>
                    

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
                        <p className="role"> Engr. (Mrs) Olubunmi F. Sweetwilliams</p>
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

            <div className="partners-section">
                <h1 className="partners-heading"> Academic & Industry Partners</h1>
                <div className="partners-grid">
                    <div className="partner">
                        <img src={aspmirlogo} alt="DSTN" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>
                    <div className="partner">
                        <img src={capiclogo} alt="AFD" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>
                    <div className="partner">
                        <img src={covenantlogo} alt="CEA MITIC" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>
                    <div className="partner">
                        <img src={googlelogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <div className="partner">
                        <img src={innaialogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <div className="partner">
                        <img src={dstnlogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <div className="partner">
                        <img src={cealogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <div className="partner">
                        <img src={oafdlogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <footer className="footer">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <h1>FEDGEN Cloud</h1>
                            </div>
                            <nav className="footer-nav">
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
                        </div>
                        </div>
                        
                    </footer>

                </div>
            </div>
        </>
    );
}

export default Home;
