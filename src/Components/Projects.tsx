import React, { useState } from 'react';
import { proyectos } from '../Data/Proyectos';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all'); // Para filtrar por tipo de proyecto
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4; // Proyectos por página

  // Filtrar proyectos por tipo
  const filteredProjects = filter === 'all' 
    ? proyectos 
    : proyectos.filter(project => project.type === filter);

  // Paginación
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-nebula-pink">
          Mis proyectos
        </h2>

        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2  rounded-full bg-yellow-400 mx-2 ${filter === 'all' ? 'bg-nebula-pink' : 'bg-gray-800'}`}>
            Todos
          </button>
          <button 
            onClick={() => setFilter('frontend')} 
            className={`px-4 py-2 rounded-full bg-blue-400 mx-2 ${filter === 'frontend' ? 'bg-nebula-pink' : 'bg-gray-800'}`}>
            Frontend
          </button>
          <button 
            onClick={() => setFilter('backend')} 
            className={`px-4 py-2 bg-purple-400 rounded-full mx-2 ${filter === 'backend' ? 'bg-nebula-pink' : 'bg-gray-800'}`}>
            Backend
          </button>
          <button 
            onClick={() => setFilter('fullstack')} 
            className={`px-4 py-2 bg-green-400 rounded-full mx-2 ${filter === 'fullstack' ? 'bg-nebula-pink' : 'bg-gray-800'}`}>
            Full Stack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {currentProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Sección de Tecnologías */}
                {project.technologies && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-nebula-pink">Tecnologías Usadas:</h4>
                    <ul className="flex flex-wrap mt-2">
                      {project.technologies.map((tech, idx) => (
                        <li 
                          key={idx} 
                          className="bg-gray-800 text-sm text-gray-300 py-1 px-3 rounded-full mr-2 mb-2"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-nebula-pink text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-400 hover:text-nebula-pink transition-colors duration-300"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      Demo
                    </a> 
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-nebula-pink text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index} 
              onClick={() => handlePageChange(index + 1)} 
              className={`mx-1 px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-nebula-pink' : 'bg-gray-800'}`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
