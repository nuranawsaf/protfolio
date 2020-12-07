import React from 'react';
import './Work.css';
import agency from '../../images/agency.png';
import volunteer from '../../images/volunteer.png';
import person from '../../images/person.png';
import hot from '../../images/hot.png';

const Work = () => {
    return (
        <section className="work">
            <a class="logo-10 navbar-brand text-danger desi" href="/home">Follio</a>
            <div>
                <h3>My Recent Work</h3>
            </div>
            <div className="half-width-9">
                <h4>Creative Agency</h4>
                <img src={agency} alt=""/>
            </div>

            <div className="half-width-9">
                <h4>School Project</h4>
                <img src={hot} alt=""/>
            </div>

            <div className="half-width-9">
                <h3>Volunteer Network</h3>
                <img src={volunteer} alt=""/>
            </div>

            <div className="half-width-9">
                <h3>Travel Guru</h3>
                <img src={person} alt=""/>
            </div>
        </section>
    );
};

export default Work;