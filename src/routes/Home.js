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
import worldbanklogo from './World-bank-logo.png';
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
                    <h1>FEDGEN</h1>
                    <p>(Federated GENeral “Omics” Cloud Infrastructure)</p>

                </div>
            </div>

            <div className="container">
                <h1 className="title">Federated GENeral “Omics”(FEDGEN) Research</h1>
                <p className="home-description">
                The goal of the FEDerated GENeral “Omics” (FEDGEN) research project is to develop ground-breaking research artefacts on federated cloud computing, artificial intelligence and general “omics”  for precision medicine in Africa. The specific objectives are to address critical issues in Africa on research capacity, large-scale research infrastructure, early disease diagnosis, public health education, large scale “omics” data storage/analysis and disease modelling. We are continuously expanding our private High-Performance Computing (HPC) infrastructure to implement the FEDGEN Datacenter and FEDGEN Testbeds towards providing the required infrastructure for the stated specific objectives. These infrastructures are  revolutionising eHealth research in Africa by providing robust platforms for storing and analysing vast amounts of “omics” dataset that underlier malaria, breast and prostate cancers. The cloud AI and advanced computing capabilities enable real-time data processing, allowing researchers to gain rapid insights into complex “omics” information and accelerate the discovery of new treatments and therapies.
                </p>

                <div className="button-container">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSduT48IQR2iBV35K769Jk1v7xvx3CmOQWTwcKJuJpeG7nYTLw/viewform" className="request-button-link">
                    <button className="request-button">Request Cloud Resources</button>
                    </a>
                </div>

                <br />
             

            </div>

            <div className="section">
                <h1 className="heading">Our Cloud Resource Capacity</h1>
                <p className="home-description">
                The FEDGEN platforms not only enhances the efficiency of eHealth research but also democratises access to complex hardware and software tools, enabling institutions and researchers, regardless of their locations or local resources, to participate in cutting-edge and large-scale scientific studies. This fosters an inclusive research environment, which is essential for addressing the African diverse health challenges, scientific skills deficit and computational infrastructure. Ultimately, FEDGEN is set to revolutionise federated cloud computing, cloud AI and “omics” research in Africa that will lead to accelerated discoveries, and ultimately better health outcomes for millions of people. Some of the FEGDEN related works that have been published in renowned outlets are found <a href='https://ucnnaji.github.io/fedgen-landing-page/#/PublishedArticle'>here.</a>
                </p>
                <br></br>
                <div className="card-container">
                    <div className="card">
                        <TbCpu size={60} />
                        <h2>160</h2>
                        <p>CPU cores</p>
                    </div>
                    <div className="card">
                        <CiServer size={62} />
                        <h2>3</h2>
                        <p>GPU Servers</p>
                    </div>

                    <div className="card">
                        <HiOutlineServerStack size={61} />
                        <h2>18</h2>
                        <p>CPU Servers</p>
                    </div>
                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2> 41.32TB</h2>
                        <p>TB of Storage</p>
                    </div>
                    <div className="card">
                        <BsCpuFill size={55} />
                        <h2>4</h2>
                        <p>TB of RAM</p>
                    </div>
                </div>
                <br />
                <br />
                <LeadershipCloud />
            </div>


            <br />
            <br />

            <div className="partners-section">
                        <h1 className="partners-heading"> FEDGEN Sponsors</h1>
                        <div className="partners-grid">
                            <div className="partner">
                                <img src={aspmirlogo} alt="DSTN" className="partner-logo" style={{ height: '40px', widows: '40px' }} />
                            </div>
                            <div className="partner">
                                <img src={capiclogo} alt="AFD" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>
                            <div className="partner">
                                <img src={covenantlogo} alt="CEA MITIC" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>
                            <div className="partner">
                                <img src={googlelogo} alt="Inria" className="partner-logo" style={{ height: '40px', widows: '40px' }} />
                            </div>

                            <div className="partner">
                                <img src={worldbanklogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                            </div>

                            <div className="partner">
                                <img src={innaialogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>

                            <div className="partner">
                                <img src={dstnlogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>

                            <div className="partner">
                                <img src={cealogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>

                            <div className="partner">
                                <img src={oafdlogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                            </div>
                        </div>
                    </div>


            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>FEDGEN</h1>
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
