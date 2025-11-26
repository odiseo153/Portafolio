import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { DetailExperience } from '../Data/Experiencias';

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
  const jobExperience: JobExperience = DetailExperience.find(x => x.id === id) || {
    id: 0,
    title: "",
    company: "",
    duration: "",
    location: "",
    description: "",
    responsibilities: [],
    skills: []
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id !== 0) {
      setIsOpen(true);
    }
  }, [id, setIsOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            ref={modalRef}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex justify-between items-start bg-gray-800/50">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{jobExperience.title}</h2>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  <Briefcase size={16} />
                  <span>{jobExperience.company}</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full">
                  <Calendar size={14} />
                  <span>{jobExperience.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full">
                  <MapPin size={14} />
                  <span>{jobExperience.location}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Descripción</h3>
                <p className="text-gray-300 leading-relaxed">
                  {jobExperience.description}
                </p>
              </div>

              {jobExperience.responsibilities?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Responsabilidades Clave</h3>
                  <ul className="space-y-3">
                    {jobExperience.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle size={18} className="text-blue-500 mt-1 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {jobExperience.skills?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobExperience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-800 bg-gray-800/50 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
