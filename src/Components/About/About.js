import React from 'react';
import './About.css'
import nu from '../../images/nu.png'

const About = () => {
    return (
        <section>
            <a class="logo navbar-brand text-danger desi" href="/home">Follio</a>
            <div className="half-width">
                <h1>Nuran Awsaf</h1>
                <h5>WEB DEVELOPER  |  FREELANCER  |  WEB DEVELOPMENT TRAINER</h5>
                <br/>
                <p>I’m Nuran Awsaf, Working as a Professional Web Developer & Web Development Trainer in Bangladesh for almost 1 year. I have experience in all expect of web development using JavaScript. I am well trained in Java Technology, I am an Oracle Certified Professional Java SE 6 programmer, I have skills in PHP, JavaScript, WordPress Theme and Plugin Development beside that I am trained at front-end technology like HTML, CSS, JavaScript, jQuery, Bootstrap. My main focus is coding the website mobile-friendly, SEO friendly, browser compatible and maximum optimized way so that it performs well. I consider the business of my clients and Organize everything according to Google’s recommendation and It helps to rank the website more easily.</p>
                <a className="button-link" href="/contact">Contact Me</a>
                <a className="button-link-1" href="/resume">Resume</a>
            </div>
            <div className="half-width1">
                <img src={nu} alt=""/>
            </div>

            <div className="blog">
                <div class="row">
                <div class="col-sm-5 txt">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">FREELANCER</h5>
                    <p class="card-text">I am Working as a freelancer with over 4 years of successful freelancing in several areas of Web Application development and design. I engender and code stunning websites that are easy for the client to update and maintain. Although I am well versed in almost all aspects of web development, I specialize in PHP, JavaScript. I mainly use WordPress as my CMS of choice. Being that I offer both design and coding, along with frequent and fast communication, I am able to modernize projects and get them knocked out fast. I will work harder for you, and the Job is not done until you are 101% satisfied. I am looking forward to having solid business relationships that will stay.</p>
                </div>
                </div>
                </div>
                <div class="col-sm-5 txt">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">WEB DEVELOPER</h5>
                    <p class="card-text">As a web developer I focus on making smooth and effective user experiences through the Application that I work with. I specialize in development and design through PHP and love to develop new WordPress themes, Plugin, as well as strive to help those that rely on WordPress or any Other CMS, to get the most out of it Aside from PHP and WordPress I work with JavaScript-based Development(React, MongoDB, Express, Node), I have extensive experience with the eCommerce. I am very pixel perfect guy Quality and great communication is my goals with every client and work. Flexible for the price, accurate with turnaround time. Feel free to contact me.</p>
                    
                </div>
                </div>
                </div>
                </div>
            </div>

            <div className="blog">
                <div class="row">
                <div class="col-sm-5 txt">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">WEB DEVELOPMENT TRAINER</h5>
                    <p class="card-text">I am Working as a freelancer with over 4 years of successful freelancing in several areas of Web Application development and design. I engender and code stunning websites that are easy for the client to update and maintain. Although I am well versed in almost all aspects of web development, I specialize in PHP, JavaScript. I mainly use WordPress as my CMS of choice. Being that I offer both design and coding, along with frequent and fast communication, I am able to modernize projects and get them knocked out fast. I will work harder for you, and the Job is not done until you are 101% satisfied. I am looking forward to having solid business relationships that will stay.</p>
                </div>
                </div>
                </div>
                <div class="col-sm-5 txt">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">DIGITAL MARKETING & SEO EXPERT</h5>
                    <p class="card-text">As a web developer I focus on making smooth and effective user experiences through the Application that I work with. I specialize in development and design through PHP and love to develop new WordPress themes, Plugin, as well as strive to help those that rely on WordPress or any Other CMS, to get the most out of it Aside from PHP and WordPress I work with JavaScript-based Development(React, MongoDB, Express, Node), I have extensive experience with the eCommerce. I am very pixel perfect guy Quality and great communication is my goals with every client and work. Flexible for the price, accurate with turnaround time. Feel free to contact me.</p>
                    
                </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;