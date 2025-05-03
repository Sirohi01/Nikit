    import React from 'react';
    import { FaHandshake, FaMapMarkedAlt, FaLaptopCode, FaUserFriends, FaBullseye, FaBolt } from 'react-icons/fa';
    import './Skills.css'; 

    const skills = [
    { icon: <FaHandshake />, text: 'Excellent negotiation and communication skills' },
    { icon: <FaMapMarkedAlt />, text: 'In-depth knowledge of local real estate market trends' },
    { icon: <FaLaptopCode />, text: 'Proficient in MLS and CRM software' },
    { icon: <FaUserFriends />, text: 'Strong client relationship management abilities' },
    { icon: <FaBullseye />, text: 'Detail-oriented and results-driven' },
    { icon: <FaBolt />, text: 'Ability to thrive in a fast-paced environment' }
    ];

    const Skills = () => {
    return (
        <section className="skills-section home">
        <h2>Professional Skills</h2>
        <div className="skills-grid">
            {skills.map((skill, index) => (
            <div key={index} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <p>{skill.text}</p>
            </div>
            ))}
        </div>
        </section>
    );
    };

    export default Skills;
