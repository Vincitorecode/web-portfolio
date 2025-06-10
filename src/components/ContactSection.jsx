// components/ContactSection.jsx
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-8 md:px-16">
  {/* Contenedor con flex para alinear texto y botón a la derecha */}
  <div className="flex flex-col md:flex-row items-center justify-between mb-12">
    <div className="text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-3xl font-semibold mb-6">Let’s work together</h2>

      {/* Botón estilo "mail" */}
      <button className="text-lg border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
        vincitore.code@gmail.com
      </button>

      {/* Teléfono */}
      <p className="text-lg mt-4">+52 443 681 1900</p>
    </div>

    {/* Botón circular a la derecha */}
    <button
      onClick={() => window.open('/contact', '_blank')}
      className="w-24 h-24 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition"
      aria-label="Get in Touch"
    >
      Get in Touch
    </button>
  </div>
</section>

  )
}

export default ContactSection
