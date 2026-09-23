import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-heading">
          <span>RESUME</span>
          <h2>My Professional Journey</h2>
        </div>

        <div className="resume-container">
          <div className="resume-intro">
            <h3>Software Engineer | Full-Stack Developer</h3>

            <p>
              I am a Software Engineer focused on building modern,
              secure, and practical web applications using React,
              Python, FastAPI, PostgreSQL, and related technologies.
            </p>

            <a
              href="/resume.pdf"
              download="Edwin-Kiprop-CV.pdf"
              className="resume-download"
            >
              Download My CV
            </a>
          </div>

          <div className="resume-details">
            <div className="resume-item">
              <span className="resume-number">01</span>

              <div>
                <h3>Education</h3>

                <p>
                  Mathematics and Physics graduate with a strong
                  foundation in analytical thinking, problem solving,
                  and quantitative reasoning.
                </p>
              </div>
            </div>

            <div className="resume-item">
              <span className="resume-number">02</span>

              <div>
                <h3>Full-Stack Development</h3>

                <p>
                  Experienced in developing frontend interfaces with
                  React and backend systems using Python and FastAPI,
                  including REST APIs, authentication, databases,
                  and deployment.
                </p>
              </div>
            </div>

            <div className="resume-item">
              <span className="resume-number">03</span>

              <div>
                <h3>Real-World Projects</h3>

                <p>
                  Built practical applications including Kentank
                  Deliveries and the Robinhood Advertising Network,
                  combining frontend, backend, database, authentication,
                  and deployment technologies.
                </p>
              </div>
            </div>

            <div className="resume-item">
              <span className="resume-number">04</span>

              <div>
                <h3>Current Focus</h3>

                <p>
                  Building scalable full-stack systems, API integrations,
                  business applications, and payment integrations
                  including M-Pesa Daraja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;