import { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
        <div className="bg-black text-white rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl font-bold transition"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Let’s work together
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
  );
}

export default ContactModal;
