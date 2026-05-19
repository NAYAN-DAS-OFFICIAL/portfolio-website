const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website using Next.js and Tailwind CSS.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "https://portfolio-website-one-fawn-18.vercel.app",
  },

  {
    title: "Todo App",
    description:
      "Full stack todo application with CRUD functionality.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "#",
  },

  {
    title: "Weather App",
    description:
      "Weather application using API integration and responsive UI.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL/weather-app",
    live: "https://weather-app-phi-one-91.vercel.app",
  },

  {
    title: "GeoStyleHub",
    description:
      "Online slot booking platform for salons and service providers with scalable architecture.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "#",
  },

  {
    title: "GeoFurnitureMart",
    description:
      "Modern e-commerce furniture platform with responsive UI and scalable frontend architecture.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "#",
  },

  {
    title: "Anime Converter",
    description:
      "AI-powered anime image converter with modern UI and image transformation features.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "#",
  },

  {
    title: "StoresRating",
    description:
      "Smart business growth platform that helps stores collect reviews and show discount popups to nearby users.",
    github: "https://github.com/NAYAN-DAS-OFFICIAL",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {project.description}
              </p>

              <div className="flex gap-3 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-700 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}