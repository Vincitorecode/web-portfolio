import React, { useEffect, useRef, useState } from 'react'

const projects = [
  { title: 'Share your work', img: '/assets/thumb1.jpg' },
  { title: 'Powertrain Timeline', img: '/assets/thumb2.jpg' },
  { title: 'bestsmile Aligner', img: '/assets/thumb3.jpg' },
  { title: 'Mobile World', img: '/assets/thumb4.jpg' },
  { title: 'Share your work', img: '/assets/thumb1.jpg' },
  { title: 'Powertrain Timeline', img: '/assets/thumb2.jpg' },
  { title: 'bestsmile Aligner', img: '/assets/thumb3.jpg' },
  { title: 'Mobile World', img: '/assets/thumb4.jpg' },
]

const MoreWork = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // controla que el desplazamiento lateral sea sutil
  const offsetX = (scrollY * 0.1).toFixed(1)

  return (
    <section className="w-full bg-white py-16 text-black">
      <div className="text-center mb-10">
        <button className="text-xl border px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
          More work
        </button>
      </div>

      {/* Primera fila */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 mb-10 transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Segunda fila */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${offsetX}px)` }}
      >
        {projects.slice(4, 8).map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreWork
