import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Magnet from '../components/Magnet';
import vic from '../assets/vic.jpeg';

const projects = [
  { title: 'Share your work', img: vic },
  { title: 'Powertrain Timeline', img: vic },
  { title: 'bestsmile Aligner', img: vic },
  { title: 'Mobile World', img: vic },
  { title: 'Creative Vision', img: vic },
  { title: 'Next Big Idea', img: vic },
  { title: 'Tech Evolution', img: vic },
  { title: 'Virtual Flow', img: vic },
];

const MoreWork = () => {
  const { scrollY } = useScroll();
  const offsetX = useTransform(scrollY, [0, 2000], [0, 100]);
  const offsetXReverse = useTransform(scrollY, [0, 2000], [0, -100]);

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full bg-white py-16 text-black">
      {/* Botón */}
      <div className="text-center mb-16">
        <Magnet>
          <button className="text-lg font-semibold border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
            View More Projects
          </button>
        </Magnet>
      </div>

      {/* Primera fila */}
      <motion.div
        style={{ x: isMobile ? 0 : offsetX }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
      >
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={`project-row1-${index}`}
            className="bg-gray-100 p-6 flex items-center justify-center"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                title={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="h-6"></div>

      {/* Segunda fila */}
      <motion.div
        style={{ x: isMobile ? 0 : offsetXReverse }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
      >
        {projects.slice(4, 8).map((project, index) => (
          <div
            key={`project-row2-${index}`}
            className="bg-gray-100 p-6 flex items-center justify-center"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                title={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MoreWork;
