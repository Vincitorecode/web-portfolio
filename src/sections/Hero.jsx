
import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/vic.jpeg';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => (
  <section className="relative w-full min-h-screen bg-white text-black overflow-hidden">
    
    {/* Texto grande animado de fondo */}
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
      className="absolute top-4 left-4 text-sm md:text-base text-neutral-500 z-20"
    >
      © Code by Victor
    </motion.header>

    {/* Navigation */}
    <motion.nav
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="absolute top-4 right-4 flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm md:text-base font-medium text-neutral-700 z-20"
    >
      {["Work", "About", "Contact"].map((text, i) => (
        <motion.a
          key={text}
          href={`#${text.toLowerCase()}`}
          className="hover:underline"
          whileHover={{
            x: [0, -2, 2, -2, 2, 0],
            transition: { duration: 0.3 },
          }}
        >
          {text}
        </motion.a>
      ))}
    </motion.nav>

    {/* Contenido central */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 gap-6 relative z-10 pt-10 md:pt-0">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="text-center md:text-left max-w-md"
      >
        <p className="mb-3 flex justify-center md:justify-start">
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight">
          Freelance <span className="font-medium">Software Engineer · QA Tester · DevOps</span>
        </h2>
      </motion.div>
    </div>

    {/* Ubicación (responsive position) */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8 }}
      className="absolute left-0 bottom-39 sm:bottom-49 bg-black text-white rounded-r-full px-6 py-4 flex items-center gap-3 text-sm sm:text-base shadow-lg z-20"
    >
      <div>
        <p className="leading-tight">Located</p>
        <p className="leading-tight">in México</p>
      </div>
      <div className="bg-white text-black rounded-full p-2">
        <Globe size={20} />
      </div>
    </motion.div>

    {/* Imagen lateral derecha */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8 }}
      className="absolute right-0 bottom-39 sm:bottom-49 bg-black text-white rounded-l-full px-8 py-3 flex items-center gap-3 text-sm sm:text-base shadow-lg z-20"
    >
      <div className="bg-white rounded-full w-12 h-12 overflow-hidden flex items-center justify-center">
        <img
          src={profileImg}
          alt="Foto"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
