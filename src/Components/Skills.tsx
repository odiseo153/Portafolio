import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const skills = {
  frontend: {
    icon: Code2,
    title: "Frontend",
    items: ["JavaScript", "React", "Angular", "TypeScript", "Bootstrap", "Tailwind"]
  },
  backend: {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Python", "Nest.js", ".NET", "PHP", "Laravel"]
  },
  database: {
    icon: Database,
    title: "Base de Datos",
    items: ["SQL Server", "PostgreSQL", "Oracle"]
  },
  others: {
    icon: Wrench,
    title: "Herramientas",
    items: ["Git", "Scrum", "Docker", "AWS"]
  },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Habilidades <span className="text-blue-500">Técnicas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un conjunto de herramientas y tecnologías que domino para construir soluciones digitales robustas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-900 text-gray-300 rounded-md text-sm font-medium border border-gray-700 hover:border-blue-500/30 hover:text-blue-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
