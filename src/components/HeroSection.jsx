// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Or HeroSection.module.css
import dennisImage from '../assets/dennis-snellenberg.jpg'; // Assuming you have the image in src/assets

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
          <div className="globe-icon"></div> {/* You'd replace this with an actual SVG or icon */}
        </div>

        <div className="freelance-info">
          <p>Freelance</p>
          <p></p>
        </div>

        <div className="arrow-icon"></div> {/* Replace with actual SVG or icon */}
      </div>
    </section>
  );
}

export default HeroSection;