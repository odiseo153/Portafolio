import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import imagenFondo from '../assets/heroFondo.jpg'

const Hero: React.FC = () => {
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
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imagenFondo}
          alt="Fondo de héroe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
            Bienvenido a Mi Portafolio
          </h2>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Soy <span className="text-blue-400 font-semibold">Odiseo</span>, un desarrollador apasionado creando experiencias web increíbles y funcionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
          >
            Conóceme
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
