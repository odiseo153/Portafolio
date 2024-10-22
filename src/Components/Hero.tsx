import React from 'react';
import { motion } from 'framer-motion';
import imagenFondo from '../assets/heroFondo.jpg'

const Hero: React.FC = () => {
  // Variantes de animación para el título y el párrafo
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <img
        src={imagenFondo}
        alt="Fondo de héroe"
        className="absolute inset-0 z-0 w-full h-full object-cover filter brightness-75"
      />
      <div className="relative z-10 text-white text-center p-6 bg-gradient-to-t from-black to-transparent rounded-lg shadow-lg">
        <motion.h2
          className="text-5xl font-bold mb-4 md:text-6xl"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Bienvenido a Mi Portafolio
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-blue-400 md:text-2xl"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        >
          Soy Odiseo, un desarrollador apasionado creando experiencias web increíbles
        </motion.p>
        <a
          href="#about"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 shadow-md transform hover:scale-105"
        >
          Aprende Más
        </a>
      </div>
    </section>
  );
};

export default Hero;
