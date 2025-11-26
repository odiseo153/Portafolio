import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, Layers } from 'lucide-react';
import { proyectos } from '../Data/Proyectos';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const filteredProjects = filter === 'all' 
    ? proyectos 
    : proyectos.filter(project => project.type === filter);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filterButtons = [
    { id: 'all', label: 'Todos', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'fullstack', label: 'Full Stack', icon: Layers },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Mis Proyectos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, demostrando mis habilidades en desarrollo web y diseño.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button 
                key={btn.id}
                onClick={() => { setFilter(btn.id); setCurrentPage(1); }} 
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  filter === btn.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {currentProjects.map((project) => (
              <motion.div 
                layout
                key={project.title} // Assuming title is unique, ideally use ID
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <div className="flex gap-3">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                          title="Ver Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-gray-900 transition-colors"
                          title="Ver Código"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700 text-blue-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 4 && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700 text-gray-400 border border-gray-600">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index} 
                onClick={() => handlePageChange(index + 1)} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-medium ${
                  currentPage === index + 1 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-110' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
