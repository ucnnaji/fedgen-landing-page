import React from 'react';

import LeadershipCloud from "../LeadershipCloud.jsx";
import containerImage from './Home-image.png';
import database from './database.png';
import { TbCpu } from "react-icons/tb";
import { BsCpuFill } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TiCloudStorage } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import group6 from './group6.jpeg';
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
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '48vh' }} />
                <div className="text-container">
                    <h1>Federated General Omics Cloud</h1>
                    <p></p>

                </div>
            </div>

            <div className="container">
                <h1 className="title">FEDGEN Cloud</h1>
                <p className="home-description">
                    The Federated General Omics cloud infrastructure, equipped with in-memory computing and cloud AI capabilities, is paving the way for informatics-based genomic research in Africa. This cutting-edge system is designed to enhance data sharing, analysis,
                    and collaboration across the continent, addressing unique genetic research challenges and advancing precision medicine. FEDGEN's cloud infrastructure is revolutionizing genomic research in Africa by providing a robust platform for storing and analyzing
                    vast amounts of genetic data. Its in-memory computing capabilities enable real-time data processing, allowing researchers to gain rapid insights into complex genetic information and accelerate the discovery of new treatments and therapies.
                    The FEDGEN platform not only enhances the efficiency of genomic research but also democratizes access to advanced computational tools, enabling institutions and researchers, regardless of their location or resources, to participate in cutting-edge studies.
                    This collaboration fosters a more inclusive research environment, which is essential for addressing the continent's diverse health challenges. Ultimately, FEDGEN is set to revolutionize precision medicine in Africa by providing a robust, scalable, and innovative
                    platform that drives forward genetic research, accelerates discoveries, and leads to better health outcomes for millions of people.
                </p>

                <div className="button-container">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSduT48IQR2iBV35K769Jk1v7xvx3CmOQWTwcKJuJpeG7nYTLw/viewform" className="request-button-link">
                    <button className="request-button">Request Cloud Resources</button>
                    </a>
                </div>

            </div>

            <div className="section">
                <h1 className="heading">Our Cloud Resource Capacity</h1>
                <p className="capdescription">
                    The FEDGEN cloud infrastructure is designed to support the computationally demanding needs of genomic research across Africa, featuring high-performance nodes equipped with cutting-edge hardware. These nodes are configured with up to 1.5 TB of RAM, providing immense memory capacity to handle the complex tasks involved in processing and analyzing massive genomic datasets. This extensive memory allocation is crucial for real-time data processing, allowing researchers to perform large-scale computations without latency, which is particularly important for tasks like genome assembly, and the application of machine learning models to genetic data.
                </p>
                <div className="card-container">
                    <div className="card">
                        <TbCpu size={60} />
                        <h2>120</h2>
                        <p>CPU cores</p>
                    </div>
                    <div className="card">
                        <CiServer size={62} />
                        <h2>8</h2>
                        <p>GPU Servers</p>
                    </div>

                    <div className="card">
                        <HiOutlineServerStack size={61} />
                        <h2>18</h2>
                        <p>CPU Servers</p>
                    </div>
                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2>32</h2>
                        <p>TB of Storage</p>
                    </div>
                    <div className="card">
                        <BsCpuFill size={55} />
                        <h2>4</h2>
                        <p>TB of RAM</p>
                    </div>
                </div>

                <LeadershipCloud />
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



                        </div>
                    </div>


            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>FEDGEN Cloud</h1>
                    </div>

                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={23} color="grey" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={23} color="grey" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} color="grey" /></a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} FEDGEN. All rights reserved.</p>
                    </div>
                </div>

            </footer>

        </>
    );
}

export default Home;
