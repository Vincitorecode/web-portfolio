function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-400">Brief description of your project.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-400">Brief description of your project.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
