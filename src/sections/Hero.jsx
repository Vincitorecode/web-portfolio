// src/sections/Hero.jsx
import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

import profileImg from '../assets/work.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => (
  <section className="relative w-full min-h-screen bg-white text-black overflow-hidden">

    {/* Fondo: Imagen centrada detrás del contenido */}
    

    {/* Texto grande animado al fondo, pero encima de la imagen */}
    <motion.h1
      className="hidden md:block absolute bottom-0 left-0 font-bold text-black pointer-events-none select-none tracking-tight leading-none z-10"
      style={{ fontSize: "16vw", whiteSpace: "nowrap" }}
      animate={{ x: ["0%", "-100%", "100%", "0%"] }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.45, 0.45, 1],
      }}
    >
      Victor Tinoco - Victor Tinoco - Victor Tinoco
    </motion.h1>

    {/* Header */}
    <motion.header
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="absolute top-6 left-6 text-base text-neutral-500 z-20"
    >
      © Code by Victor
    </motion.header>

    {/* Navigation */}
    <motion.nav
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="absolute top-6 right-6 flex gap-6 text-base font-medium text-neutral-700 z-20"
    >
      <motion.a
        href="#work"
        className="hover:underline"
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.3 },
        }}
      >
        Work
      </motion.a>
      <motion.a
        href="#about"
        className="hover:underline"
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.3 },
        }}
      >
        About
      </motion.a>
      <motion.a
        href="#contact"
        className="hover:underline"
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.3 },
        }}
      >
        Contact
      </motion.a>
    </motion.nav>

    {/* Contenido central */}
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 gap-1 relative z-10 mt-[-1rem]">
  {/* Información */}
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.4 }}
    className="mt-2 md:mt-0 text-center max-w-md"
  >
    <p className="mb-2 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4 L20 20 M20 20 L20 14 M20 20 L14 20"
        />
      </svg>
    </p>

    <h2 className="text-xl md:text-3xl font-light leading-none">
      Freelance <span className="font-medium">Software Engineer · QA Tester · DevOps</span>
    </h2>
  </motion.div>
</div>

    {/* Ubicación */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8 }}
      className="absolute -left-2 bottom-60 bg-black text-white rounded-r-full px-6 py-3 flex items-center gap-4 text-lg shadow-lg z-20"
    >
      <div>
        <p className="leading-tight">Located</p>
        <p className="leading-tight">in México</p>
      </div>
      <div className="bg-white text-black rounded-full p-3">
        <Globe size={24} />
      </div>
    </motion.div>

    {/* Imagen lateral derecha */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.8 }}
  className="absolute -right-2 bottom-60 bg-black text-white rounded-l-full px-7 py-4 flex items-center gap-4 text-lg shadow-lg z-20"
>
  <div className="bg-white rounded-full p-3 w-10 h-10 overflow-hidden flex items-center justify-center">
    {/* Imagen pequeña aquí */}
    <img
      src="/ruta/de/tu-foto.jpg" // reemplaza con la ruta de la imagen
      alt="Foto"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>



  </section>
);

export default Hero;
