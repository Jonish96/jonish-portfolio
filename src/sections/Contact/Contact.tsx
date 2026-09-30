import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something together.</h2>

        <p className="contact-description">
          I'm open to software engineering opportunities where I can contribute
          to building scalable, reliable, and high-quality applications.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmKzxXNxGxWvSQPLPHNmgdxZBTwGPGvHGfhsWJTvSrlMDtsJMxrnLgBMvsWfCQKSJzcL"
            className="primary-button"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/jonish-prajapati-313652148"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Jonish96"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;