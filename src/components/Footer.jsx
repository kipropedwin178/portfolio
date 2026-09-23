import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Edwin Kiprop</h3>
            <p>
              Software Engineer | Full-Stack Developer
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/kipropedwin178"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:edwinkiprop722@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Edwin Kiprop. All rights reserved.
          </p>

          <p>
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;