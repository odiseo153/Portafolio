import { useState } from "react";
import { experiences } from "../Data/Experiencias";
import ModalInfoExperience from "./ModalInfoExperience";

const Experiences = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (id) => {
    setSelectedExperienceId(id);
    setIsOpen(true);  // Abre el modal
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Cierra el modal
  };

  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-stellar-yellow animate-pulse">
          Experiencias
        </h2>

        {/* Renderizar el modal solo cuando esté abierto */} 
        {isOpen && (
          <ModalInfoExperience
            id={selectedExperienceId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}

        {/* Tarjetas de Experiencia */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => handleOpenModal(exp.id)} // Abre el modal con el ID correcto
              
              className="relative bg-dark-space p-6 border-2 border-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-out animate-fade-in"
            >
              
              <h3 className="text-2xl text-galactic-blue font-semibold mb-2">
                {exp.title}
              </h3>
              <p className="text-light-star mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
