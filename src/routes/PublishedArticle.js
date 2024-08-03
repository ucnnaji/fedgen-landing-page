import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Content from "../Content.js";
import "../App.css";
import Data from '../Data.json';
import containerImage from './Container-image.png';
import SecondData from '../SecondData.json';  // Assuming you have another JSON file for different years

function PublishedArticle() {
    const [activeYear, setActiveYear] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (activeYear) {
            case '2024':
                setData(Data);  // Use the appropriate data for 2024
                break;
            case '2023':
                setData(SecondData);  // Use the appropriate data for 2023
                break;
            // Add more cases for other years and their corresponding data
            default:
                setData([]);
        }
    }, [activeYear]);

    return (
        <>
           <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image"/>
                <h1>Published Articles</h1>
            </div>

           

            <>  
                <nav className='second-link'>
                    <div><Link to="#" onClick={() => setActiveYear('2024')}>2024</Link></div>
                    <div><Link to="#" onClick={() => setActiveYear('2023')}>2023</Link></div>
                    <div><Link to="#" onClick={() => setActiveYear('2022')}>2022</Link></div>
                    <div><Link to="#" onClick={() => setActiveYear('2021')}>2021</Link></div>
                    <div><Link to="#" onClick={() => setActiveYear('2020')}>2020</Link></div>
                    <div><Link to="#" onClick={() => setActiveYear('2019')}>2019</Link></div>
                </nav>

                <div className='json-content'>
                <Content data={data} />
            </div>
            </>
           
                
            
        </>
    );
}

export default PublishedArticle;
