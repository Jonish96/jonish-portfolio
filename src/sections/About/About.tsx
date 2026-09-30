import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <p className="section-label">ABOUT ME</p>

        <h2>
          Building reliable software for real-world systems.
        </h2>

        <div className="about-content">
          <p>
            I'm a Software Engineer with 7+ years of experience designing,
            developing, and supporting enterprise applications, with a strong
         focus on Java, Spring Boot, microservices, and distributed systems.
          </p>

          <p>
           I work across the full software development lifecycle — from backend
           APIs and event-driven processing to frontend development, cloud
           deployments, automated testing, production monitoring, and
           troubleshooting.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;