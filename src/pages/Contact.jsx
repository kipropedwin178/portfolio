import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <span>CONTACT</span>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in discussing new projects,
              software development opportunities, business ideas,
              and collaborations.
            </p>

            <div className="contact-item">
              <strong>Phone</strong>
              <p>
                <a href="tel:+254759255547">
                  0759 255 547
                </a>
              </p>
            </div>

            <div className="contact-item">
              <strong>Email</strong>
              <p>
                <a href="mailto:edwinkiprop722@gmail.com">
                  edwinkiprop722@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <p>
                <a
                  href="https://github.com/kipropedwin178"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kipropedwin178
                </a>
              </p>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>
              <p>Coming Soon</p>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;