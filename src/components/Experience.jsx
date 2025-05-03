    import React from 'react';
    import { FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';

    export default function Experience() {
    return (
        <section id="experience" className="experience">
        <h2>Professional Experience</h2>

        <div className="job">
            <h3><FaBuilding className="icon" /> Relationship Manager – Real Estate</h3>
            <p><strong>Company:</strong> Inframantra India Pvt Ltd</p>
            <p><strong>Location:</strong> Gurgaon, Haryana</p>
            <p><strong>Duration:</strong> Aug 2024 – Present</p>
            <ul>
            <li>To sell products through third-party marketplaces and managed service providers</li>
            <li>Achieved targets consistently, contributing to revenue generation and company growth.</li>
            </ul>
        </div>

        <div className="job">
            <h3><FaHandshake className="icon" /> Relationship Manager</h3>
            <p><strong>Company:</strong> Anarock Property Consultants Pvt Ltd</p>
            <p><strong>Location:</strong> Gurgaon, Haryana</p>
            <p><strong>Duration:</strong> Jan 2024 – July 2024</p>
            <ul>
            <li>Utilized market research and analysis to advise clients on pricing strategies and investment opportunities.</li>
            </ul>
        </div>

        <div className="job">
            <h3><FaChartLine className="icon" /> Sales Manager</h3>
            <p><strong>Company:</strong> Property Pistol Realty Pvt Ltd</p>
            <p><strong>Location:</strong> Gurgaon, Haryana</p>
            <p><strong>Duration:</strong> Dec 2022 – Dec 2023</p>
            <ul>
            <li>Fostered long-term relationships with clients, resulting in a high rate of repeat business and referrals.</li>
            </ul>
        </div>
        </section>
    );
    }
