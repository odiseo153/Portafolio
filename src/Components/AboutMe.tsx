import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
              <User size={32} />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Sobre Mí
            </h2>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Soy un apasionado <span className="text-blue-400 font-semibold">Desarrollador de Software</span> especializado en el área Backend. 
              Mi objetivo es ayudar a las empresas a transformar sus procesos y optimizar su infraestructura tecnológica. 
              Me dedico a simplificar lo complejo, creando aplicaciones que no solo mejoran la eficiencia, 
              sino que también fomentan un crecimiento ágil e innovador.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
