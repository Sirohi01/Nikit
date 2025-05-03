import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaProjectDiagram, FaRProject } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="header">
        <h1 className="logo">Nikit Chaudhary</h1>
        <nav>
            <ul>
            <li><a href="#home"><FaHome /> Home</a></li>
            <li><a href="#about"><FaUser /> About</a></li>
            <li><a href="#experience"><FaBriefcase /> Experience</a></li>
            <li><a href="#contact"><FaEnvelope /> Contact</a></li>
            </ul>
        </nav>
        </header>
    );
}
