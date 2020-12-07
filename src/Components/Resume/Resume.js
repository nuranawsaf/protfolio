import React from 'react';
import './Resume.css';
import cv from '../../images/cv-01.png';
import cv1 from '../../images/cv-02.png';

const Pages = () => {
    return (
        <section>
            <a class="logo navbar-brand text-danger desi" href="/home">Follio</a>
            <div className="top">
            <h1>My Resume</h1>
            </div>
            <div>
            <a className="bg" target="_blank" href="https://drive.google.com/file/d/1Sj0aB2XebrfJ5GBxZOsrRuom-vaKR07U/view?usp=sharing">Download Resume</a>
            </div>

            <div className="cv-size">
                <img src={cv} alt=""/>      
            </div>
                
            <div className="cv-size">
                <img src={cv1} alt=""/>
            </div>
        </section>
    );
};

export default Pages;