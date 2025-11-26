import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a href="#">Odiseo Rincón</a>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium hover:text-blue-500 transition-colors duration-300 ${
                    scrolled ? 'text-gray-600' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 border-l pl-6 border-gray-300/30">
            <a href="https://github.com/odiseo153" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 hover:scale-110 transform ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/odiseo-esmerlin-rincon-sanchez-48053524b/" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 hover:scale-110 transform ${scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'}`}>
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:odiseorincon@gmail.com" className={`transition-colors duration-300 hover:scale-110 transform ${scrolled ? 'text-gray-600 hover:text-red-500' : 'text-gray-300 hover:text-red-400'}`}>
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 font-medium text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex justify-center space-x-8 pt-4">
                  <a href="https://github.com/odiseo153" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/odiseo-esmerlin-rincon-sanchez-48053524b/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:odiseorincon@gmail.com" className="text-gray-500 hover:text-red-500">
                    <Mail size={24} />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
