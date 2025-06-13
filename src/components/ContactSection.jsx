// src/sections/ContactSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/vic.jpeg';

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-12 relative pt-24">

      {/* Imagen y mensaje */}
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full mb-6 object-cover"
        />
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Let’s work
        </h2>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
          together
        </h2>
      </div>

      {/* Línea divisora */}
      <div className="w-full h-px bg-white/10 my-12"></div>

      {/* Info de contacto */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="border border-white/10 rounded-full px-8 py-4 text-lg text-white/90">
          info@vincitorecode.com
        </div>
        <div className="border border-white/10 rounded-full px-8 py-4 text-lg text-white/90">
          +52 443 681 1900
        </div>
      </div>

      {/* Botón redondo */}
      <motion.a
        href="mailto:vincitore.code@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 bg-blue-600 text-white w-48 h-48 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg"
      >
        Get in touch
      </motion.a>

      {/* Footer */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm text-white/40 mt-24 gap-4">
        <p>2025 © Edition</p>
        <p>Local Time: {new Date().toLocaleTimeString('en-US', { hour12: true })}</p>
        <div className="flex gap-6 text-white">
          <a href="https://awwwards.com" target="_blank" rel="noopener noreferrer">Awwwards</a>
          <a href="https://instagram.com/vincitorecode" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/vincitorecode" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/vincitorecode" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
