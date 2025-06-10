// components/ContactSection.jsx
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-8 md:px-16">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Let’s work together</h2>

        {/* Correo */}
        <p className="text-lg mb-4">victor@email.com</p>

        {/* Botón estilo "More work" */}
        <button className="text-lg border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          More work
        </button>

        {/* Teléfono */}
        <p className="text-lg mt-4">+52 123 456 7890</p>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-700 mb-6"></div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}

export default ContactSection
