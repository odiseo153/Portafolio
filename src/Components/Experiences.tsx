import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experiences } from "../Data/Experiencias";
import ModalInfoExperience from "./ModalInfoExperience";

const Experiences: React.FC = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (id: number) => {
    setSelectedExperienceId(id);
    setIsOpen(true);
  };

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
              <Briefcase size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Experiencia Laboral
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y los roles que he desempeñado en diferentes proyectos y empresas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenModal(exp.id)}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-2">
                {exp.description}
              </p>

              <div className="flex items-center text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Ver más detalles <ChevronRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <ModalInfoExperience
              id={selectedExperienceId}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experiences;
