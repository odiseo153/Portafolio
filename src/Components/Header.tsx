import React, { useState } from 'react';
import { Mail } from "lucide-react";
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className="bg-white shadow-md fixed top-0 left-0 w-full z-10 transition-300"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Odiseo Rincón
        </motion.h1>
        {/* Botón para mostrar el menú móvil */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          onClick={toggleMobileMenu}
        >.
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <nav className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} absolute md:relative bg-white md:bg-transparent top-full left-0 w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 md:space-y-0 space-y-2">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">Sobre Mí</a></li>
            <li><a href="#experience" className="text-gray-600 hover:text-gray-800">Experiencia</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Proyectos</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-gray-800">Habilidades</a></li>
          </ul>
        </nav>
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >
          <a href="https://github.com/odiseo153" target="_blank" className="text-gray-600 hover:text-gray-800">
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/odiseo-esmerlin-rincon-sanchez-48053524b/" className="text-gray-600 hover:text-gray-800">
            <i className="fa-brands fa-linkedin"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:odiseorincon@gmail.com" className="text-gray-600 hover:text-gray-800">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
