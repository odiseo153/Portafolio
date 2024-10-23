import {  useEffect, useRef } from 'react';
import { DetailExperience } from '../Data/Experiencias';

// Definición del tipo para la experiencia laboral
interface JobExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

interface ModalInfoExperienceProps {
  id: number;
  setIsOpen: (valor: boolean) => void;
  isOpen: boolean;
}

export default function ModalInfoExperience({ id, setIsOpen, isOpen }: ModalInfoExperienceProps) {
  // Encuentra la experiencia seleccionada
  const jobExperience: JobExperience = DetailExperience.find(x => x.id === id) || {
    id: 0,
    title: "nada",
    company: "nada",
    duration: "nada",
    location: "nada",
    description: "nada",
    responsibilities: ["nada"],
    skills: ["nada"]
  };

  // Ref para el modal
  const modalRef = useRef<HTMLDivElement>(null);

  // Abre el modal automáticamente cuando se selecciona una experiencia
  useEffect(() => {
    if (id !== 0) {
      setIsOpen(true);
    }
  }, [id]);

  // Cierra el modal cuando se haga clic en "Close"
  const closeModal = () => {
    setIsOpen(false);
  };

  // Maneja el clic fuera del modal
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Añadir el evento de clic
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el evento al desmontar
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div 
            className="bg-white overflow-y-auto w-full rounded-lg shadow-lg p-6 max-h-screen mx-4" 
            ref={modalRef}
            style={{ maxHeight: '90vh' }} // Limitar la altura del modal
          >
            {/* Header con título y botón de cierre */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-800">{jobExperience.title}</h2>
              <button 
                className="text-gray-500 hover:text-gray-700" 
                onClick={closeModal}
              >
                &times; 
              </button>
            </div>
            {/* Contenido del modal */}
            <div className="mt-4 overflow-y-auto max-h-[calc(90vh-120px)]"> {/* Ajustar espacio para el scroll */}
              <p className="text-lg font-semibold text-gray-800">{jobExperience.company}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{jobExperience.duration}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657a8 8 0 10-11.314 0 8 8 0 0011.314 0zM12 12v.01M12 8h.01M12 16h.01M16 12h.01M8 12h.01" />
                </svg>
                <span>{jobExperience.location}</span>
              </div> 
              {/* Descripción */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Descripción</h3>
                <p className="text-gray-700 mt-1">{jobExperience.description}</p>
              </div>
              {/* Responsabilidades */}
              {jobExperience.responsibilities?.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Responsabilidades Clave</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-1 space-y-3">
                    {jobExperience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Habilidades */}
              {jobExperience.skills?.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {jobExperience.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Botón para cerrar el modal */}
            <div className="flex justify-end mt-6">
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
