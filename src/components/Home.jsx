import React from 'react';
import profile from '../assets/profile.jpg';

export default function Home() {
    return (
        <section id="home" className="home">
        <img src={profile} alt="Nikit Chaudhary" />
        <h2>Real Estate Relationship Manager</h2>
        <p>Dedicated to helping clients find the perfect property solution with a personalized approach and deep market insights.</p>
        </section>
    );
}
