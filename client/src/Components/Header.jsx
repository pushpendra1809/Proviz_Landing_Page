import React from 'react';
import './Header.css';
import ApplicationForm from './ApplicationForm';

const Header = () => (
    <header>
        <h1>Proviz School of AI</h1>
        <nav>
        <a href="#about">About</a>
            <a href="#apply">Apply Now</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
);

export default Header;