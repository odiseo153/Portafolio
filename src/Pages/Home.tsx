import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutMe = React.lazy(() => import("../Components/AboutMe"));
const Experiences = React.lazy(() => import("../Components/Experiences"));
const Footer = React.lazy(() => import("../Components/Footer"));
const Header = React.lazy(() => import("../Components/Header"));
const Hero = React.lazy(() => import("../Components/Hero"));
const Projects = React.lazy(() => import("../Components/Projects"));
const Skills = React.lazy(() => import("../Components/Skills"));
const Contact = React.lazy(() => import("../Components/Contact"));

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Home: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  // Detecta cuando se pasa la sección de Hero
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Mostrar el header si la parte inferior de Hero no es visible en el viewport
        setShowHeader(heroBottom < 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Cargando...</div>}>
        {/* Animación del header cuando se pasa Hero */}
        {showHeader && (
            <Header />
        )}

        <div id="hero">
          <Hero />
        </div>

        {/* Animaciones para las secciones */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Experiences />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </Suspense>
    </div>
  );
};
