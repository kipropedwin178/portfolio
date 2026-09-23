import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Vite",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "Pydantic",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "SQLite",
        "Database Design",
        "CRUD Operations",
      ],
    },
    {
      title: "Authentication & Security",
      skills: [
        "JWT",
        "Password Hashing",
        "Role-Based Access",
        "Environment Variables",
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git",
        "GitHub",
        "Render",
        "Cloudinary",
      ],
    },
    {
      title: "Current Focus",
      skills: [
        "Full-Stack Systems",
        "API Integration",
        "Business Applications",
        "M-Pesa Daraja",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span>SKILLS</span>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;