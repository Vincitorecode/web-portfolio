import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnet from '../components/Magnet';
import vic from '../assets/vic.jpeg';
import MY_WEB from '../assets/MY-WEB.PNG';

const projects = [
  { title: 'Share your work', img: MY_WEB },
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
  const offsetX = useTransform(scrollY, [0, 1000], [0, 60]);
  const offsetXReverse = useTransform(scrollY, [0, 1000], [0, -60]);

  return (
    <section className="w-full bg-white py-16 text-black">
      {/* Botón */}
      <div className="text-center mb-10">
        <Magnet>
          <button className="text-lg font-semibold border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
            View More Projects
          </button>
        </Magnet>
      </div>

      {/* Primera fila */}
      <motion.div
        style={{ x: offsetX }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 mb-10"
      >
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={`project-row1-${index}`}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              title={project.title}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Segunda fila */}
      <motion.div
        style={{ x: offsetXReverse }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16"
      >
        {projects.slice(4, 8).map((project, index) => (
          <div
            key={`project-row2-${index}`}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              title={project.title}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MoreWork;
