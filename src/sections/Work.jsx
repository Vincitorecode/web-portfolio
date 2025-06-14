import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/vic.jpeg"; // Puedes cambiarlo por imagen real de cada proyecto

const projects = [
  { title: "Ecommerce QA Automation", description: "End-to-end automated tests", link: "#" },
  { title: "QA Tester Assessment", description: "Technical test project", link: "#" },
  { title: "Fuzzer", description: "A custom fuzzer for testing", link: "#" },
  { title: "Portfolio Website", description: "Personal portfolio", link: "#" },
  { title: "Security Audit Dashboard", description: "Dashboard prototype", link: "#" },
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      className="relative w-full bg-white text-black px-6 md:px-20 py-24"
      onMouseMove={handleMouseMove}
    >
      {/* About Me */}
      <div className="max-w-3xl mx-auto mb-24 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I help companies build and optimize their products by solving real-world problems through design, testing, and development solutions.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-20">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="block group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h3 className="text-5xl md:text-6xl font-semibold group-hover:opacity-60 transition duration-300">
                {project.title}
              </h3>
              <p className="mt-4 md:mt-0 text-base md:text-lg text-gray-600">
                {project.description}
              </p>
            </div>
            <div className="h-[1px] w-full bg-black mt-6" />
          </a>
        ))}
      </div>

      {/* Hover Preview */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            className="fixed pointer-events-none z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              top: mousePos.y + 20,
              left: mousePos.x + 20,
            }}
          >
            <div className="relative w-80 h-52 border-32 border-black overflow-hidden shadow-xl bg-white">
              <img
                src={profileImg}
                alt="Project preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-sm font-medium">
                  View
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
