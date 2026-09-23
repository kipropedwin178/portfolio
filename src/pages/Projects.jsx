import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Kentank Deliveries",
      description:
        "A full-stack water tank catalogue and management platform that allows administrators to manage products, images, availability, and customer contact information.",

      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "JWT",
        "Bootstrap",
        "Cloudinary",
      ],

      image: "/kentt.png",
      liveLink: "https://kentankdeliveriesnumber.co.ke/",
      githubLink: "https://github.com/kipropedwin178/kentank-frontend",
    },

    {
      title: "Robinhood Advertising Network",
      description:
        "A membership and advertising platform that rewards users for engaging with promotional campaigns while providing businesses with a structured advertising solution.",

      technologies: ["React", "FastAPI", "PostgreSQL", "JWT", "SQLAlchemy"],

      image: "/rbhh.png",
      liveLink: "https://robinhood-advertising.onrender.com/",
      githubLink: "https://github.com/kipropedwin178/robinhood_advertising_net",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <span>PROJECTS</span>
          <h2>Featured Work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-screenshot"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>

                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
