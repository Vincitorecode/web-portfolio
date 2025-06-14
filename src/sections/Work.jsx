import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/vic.jpeg";

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
      className="relative w-full min-h-screen bg-white text-black px-6 md:px-20 py-20"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="block p-6 border border-black rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </a>
        ))}
      </div>

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
            <div className="relative w-60 h-40 border-4 border-black rounded-lg overflow-hidden shadow-xl bg-white">
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
