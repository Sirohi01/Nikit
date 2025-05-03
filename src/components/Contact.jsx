import React from 'react';
import resume from "../assets/Nikit.pdf";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p><strong>Email:</strong> <a href="mailto:nikitchaudhary97@gmail.com">nikitchaudhary97@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919149205842">+91 9149205842</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikit-chaudhary-71623b219/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nikitchaudhary</a></p>
            <p><strong>Location:</strong> Gurugram, Haryana, India</p>

            <a 
                href={resume}
                download
                className="resume-button"
                style={{
                    display: 'inline-block',
                    marginTop: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#fdd835',
                    color: '#263343',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = '#fff176';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = '#fdd835';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
            >
                Download Resume
            </a>
        </section>
    );
}
