import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Nikit Chaudhary. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="mailto:nikitchaudhary97@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/nikit-chaudhary-71623b219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
