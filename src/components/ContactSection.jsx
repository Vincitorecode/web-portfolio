import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/vic.jpeg';
import Magnet from '../components/Magnet';
import ContactModal from '../components/ContactModal'; 

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="w-full h-screen bg-black text-white flex items-center justify-center px-6 sm:px-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full gap-6">

        {/* Columna izquierda */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src={profileImg}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-0 object-cover"
          />
          <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  Let’s work
                </h2>
                <Magnet magnetStrength={2} padding={100}>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-base md:text-lg font-semibold shadow-xl"
                  >
                    Get in touch
                  </button>
                </Magnet>
              </div>

                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  together
                </h2>
              </div>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="border border-white/10 rounded-full px-8 py-4 text-lg text-white/90">
              vincitorecode@gmail.com
            </div>
            <div className="border border-white/10 rounded-full px-8 py-4 text-lg text-white/90">
              +52 443 681 1900
            </div>
          </div>

          <div className="w-full mt-8 text-sm text-white/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>2025 © Edition</p>
            <p>Local Time: {new Date().toLocaleTimeString('en-US', { hour12: true })}</p>
            <div className="flex gap-6 text-white text-sm">
              
              <a href="https://instagram.com/vincitorecode" target="_blank" rel="noopener noreferrer">Instagram</a>
              
              <a href="https://www.linkedin.com/in/victor-code/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
