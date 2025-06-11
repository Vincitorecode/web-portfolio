import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionTitle from "../components/SectionTitle";
import ContactModal from './ContactModal';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white py-20 px-6 sm:px-12 md:px-20 flex flex-col justify-center"
    >
      <SectionTitle>Contact</SectionTitle>
      <p className="mb-8 text-gray-300 text-center md:text-justify max-w-3xl mx-auto">
        Feel free to reach out! I’m always open to collaboration or questions.
      </p>

      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-3xl mx-auto gap-8">

        {/* Contact info */}
        <div className="space-y-4 text-center md:text-justify">
          <a
            href="mailto:vincitore.code@gmail.com"
            className="flex items-center gap-3 underline hover:text-gray-100 justify-center md:justify-start"
          >
            <FaEnvelope /> vincitore.code@gmail.com
          </a>
          <a
            href="tel:+524436811900"
            className="flex items-center gap-3 underline hover:text-gray-100 justify-center md:justify-start"
          >
            <FaPhone /> +52 443 681 1900
          </a>
          {/* Redes sociales */}
          <div className="flex gap-6 mt-4 justify-center md:justify-start text-2xl">
            <a
              href="https://linkedin.com/in/vincitorecode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-100"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/vincitorecode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-100"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Botón "Get in Touch" */}
        <ContactModal />
      </div>


      

      
      
    
    </section>
  )
}

export default ContactSection;
