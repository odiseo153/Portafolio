interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Desarrollador Full Stack",
    company: "Partido Anr",
    period: "2023 - 2023",
    description: "Trabajé como Desarrollador Full Stack para el partido ANR de Paraguay, donde desarrollé una plataforma para la gestión y administración de votantes. Implementé el backend utilizando .NET con Entity Framework, lo que permitió un manejo eficiente de las bases de datos y una integración fluida con otras partes del sistema "
  },
  {
    title: "Desarrollador Full Stack`",
    company: "AddTo",
    period: "2024 - 2024",
    description: "Trabajé como Desarrollador Full-Stack en AddTo, donde desarrollé una solución de IA personalizada para la empresa. En este proyecto, utilicé Python como lenguaje principal y Flask para construir la API que gestionaba la interacción con la IA. y tambien HTML , CSS , JavaScript para la creacion de la interfaz"
  }
];

const Experiences = () => {
  return (
    <section id="experience" className="py-20  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-stellar-yellow animate-pulse">
          Experiencias
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-dark-space p-6 border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out animate-fade-in"
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
