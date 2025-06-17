
import React from 'react';
import './HeroSection.css'; 
import dennisImage from '../assets/dennis-snellenberg.jpg'; 

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text-overlay">
          <h1 className="hero-name">Vic</h1>
        </div>
        <img src={dennisImage} alt="Vic" className="hero-image" />

        <div className="location-badge">
          <p>Mexico</p>
          <div className="globe-icon"></div> 
        </div>

        <div className="freelance-info">
          <p>Freelance</p>
          <p></p>
        </div>

        <div className="arrow-icon"></div> 
      </div>
    </section>
  );
}

export default HeroSection;