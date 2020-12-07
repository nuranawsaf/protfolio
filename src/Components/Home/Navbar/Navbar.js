import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg colr">
                <a class="navbar-brand text-danger desi" href="/home">Follio</a>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link mr-4 text-white" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4 text-white" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4 text-white" href="work">Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4 text-white" href="/resume">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4 text-white" href="/blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4 text-white" href="/contact">Contact</a>
                </li>
                   <a className="btn" href="/contact">Let's Talk</a>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;