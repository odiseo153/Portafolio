import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import imagenFondo from '../assets/heroFondo.jpg';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        {/* Dot pattern overlay could be added here if needed */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl shadow-yellow-500/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={imagenFondo} 
                alt="Profile" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              HAVE AN IDEA?<br />
              LET'S CHAT!
            </h3>
            
            <div className='flex flex-col gap-4'>

            <a 
              href="mailto:odiseorincon@gmail.com" 
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-white hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1"
            >
              <Mail className="w-6 h-6" />
              odiseorincon@gmail.com
            </a>

             <p 
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-white hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1"
            >
              <Phone className="w-6 h-6" />
              829 789 0766
            </p>
              </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>Copyright © {new Date().getFullYear()} Odiseo Rincón. All Rights Reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
