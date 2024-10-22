import React from 'react';

const skills = {
  frontend: ["JavaScript", "React", "Angular", "TypeScript", "Bootstrap", "Tailwind"],
  backend: ["Node.js", "Python", "Nest.js", ".NET", "PHP", "Laravel"],
  database: ["SQL Server", "PostgreSQL", "Oracle"],
  others: ["Git", "Scrum"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Tecnologías</h2>

        {/* Frontend Skills */}
        <SkillCategory title="Frontend" skills={skills.frontend} />

        {/* Backend Skills */}
        <SkillCategory title="Backend" skills={skills.backend} />

        {/* Database Skills */}
        <SkillCategory title="Base de Datos" skills={skills.database} />

        {/* Other Skills */}
        <SkillCategory title="Otros" skills={skills.others} />
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap mt-2 gap-4 ">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border-2 border-blue-500 bg-gray-800 px-4 py-2 rounded-full text-white font-semibold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-500"
            title={skill} // Tooltip para mostrar el nombre de la habilidad
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
