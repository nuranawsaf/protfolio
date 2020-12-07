import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="width">
            <Header></Header>
            <div className="style">
                <h1 className="style-1">I'm <span className="text-danger"> <strong>Nuran</strong></span> Awsaf</h1>
                <br/>
                <h1 className="style-2">Web Developer</h1>
                <br/>
                <section class="d-flex flex-row bd-highlight mb-3 icons">
                    <div className="icon-1">
                      <a target="_blank" href="https://www.facebook.com/awsaf00001/"><i class="fab fa-facebook-f"></i></a>
                    </div>
                    
                    <div className="icon-2">
                      <a target="_blank" href="https://www.instagram.com/nuren_awsaf/"><i class="fab fa-instagram"></i></a>
                    </div>
                    
                    <div className="icon-3">
                      <a target="_blank" href="https://www.linkedin.com/in/nuran-awsaf-b1428a13a/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </section>
            </div>
            
        </div>
    );
};

export default Home;