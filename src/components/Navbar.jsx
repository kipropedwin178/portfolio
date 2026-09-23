import "./Navbar.css";

function Navbar() {
  return (
    <nav className="portfolio-navbar">
      <div className="container">
        <div className="portfolio-logo">
          Edwin Kiprop
        </div>

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