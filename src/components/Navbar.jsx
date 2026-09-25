import "./Navbar.css";

function Navbar() {
  return (
    <nav className="portfolio-navbar">
      <div className="container">
        <a href="#home" className="portfolio-logo">
          <img
            src="/logopo.jpeg"
            alt="Edwin Kiprop Logo"
            className="portfolio-logo-image"
          />
        </a>

        <ul className="portfolio-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#resume">Resume</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
