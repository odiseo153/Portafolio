import React from 'react';
import { ChevronUp, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <button 
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6 group"
        >
          <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          <span className="text-sm font-medium">Volver arriba</span>
        </button>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Odiseo Rincón. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-red-500 fill-red-500" /> usando React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
