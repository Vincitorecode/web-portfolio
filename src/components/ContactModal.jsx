import { useState } from "react";

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    closeModal();
  };

  return (
    <>
      {/* Botón principal */}
      <button
        onClick={openModal}
        className="text-lg font-semibold border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      >
        Get in Touch
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Contenedor del modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-black text-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-fadeIn scale-95">
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-500 hover:text-white text-3xl font-bold transition"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Título */}
              <h2 className="text-3xl font-bold mb-6 text-center">
                Let’s work together
              </h2>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 resize-none focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full border border-white text-white font-semibold py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ContactModal;
