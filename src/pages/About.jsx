import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-heading">
          <span>ABOUT ME</span>
          <h2>Building practical solutions with code.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Edwin Kiprop, a Software Engineer and Full-Stack Developer
              focused on building modern web applications and practical
              digital solutions.
            </p>

            <p>
              My background in Mathematics and Physics gave me a strong
              foundation in analytical thinking and problem solving. I later
              developed my skills in software development through hands-on
              learning and building real-world applications.
            </p>

            <p>
              I work primarily with React on the frontend and Python with
              FastAPI on the backend, connecting applications to databases
              such as PostgreSQL and SQLite. I also work with REST APIs,
              authentication, deployment, and other technologies required to
              turn an idea into a functional application.
            </p>

            <p>
              My approach is simple: understand the problem, design a practical
              solution, and build software that is secure, maintainable, and
              useful.
            </p>
          </div>

          <div className="about-highlight">
            <div className="highlight-card">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS, Vite & Bootstrap</p>
            </div>

            <div className="highlight-card">
              <h3>Backend</h3>
              <p>Python, FastAPI, REST APIs & SQLAlchemy</p>
            </div>

            <div className="highlight-card">
              <h3>Database</h3>
              <p>PostgreSQL, SQLite & database-driven applications</p>
            </div>

            <div className="highlight-card">
              <h3>Development</h3>
              <p>Git, GitHub, JWT authentication & deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;