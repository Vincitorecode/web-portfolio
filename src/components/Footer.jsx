import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-4 sm:px-8 md:px-16">
      {/* Contacto principal */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Let’s work together</h2>
        <div className="mb-4">
          <p className="text-lg">miemail@correo.com</p>
        </div>
        <button className="text-lg border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          More work
        </button>
        <div className="mt-4">
          <p className="text-lg">+52 123 456 7890</p>
        </div>
      </div>

      {/* Línea separadora */}
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
    </footer>
  )
}

export default Footer
