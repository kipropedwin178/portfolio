import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>

          <h1>Edwin Kiprop</h1>

          <h2>Software Engineer | Full-Stack Developer</h2>

          <p>
            I build modern web applications using React, FastAPI, PostgreSQL,
            and secure backend systems. My focus is creating practical digital
            solutions that help businesses grow and operate efficiently.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-projects">
              View Projects
            </a>

            <a href="#contact" className="btn-contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="/20221027143252_IMG_6764.jpg"
              alt="Edwin Kiprop - Software Engineer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;