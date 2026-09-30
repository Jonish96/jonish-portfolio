import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <p className="hero-intro">Hi, I'm</p>

        <h1>Jonish Prajapati</h1>

        <h2>
          Software Engineer specializing in{" "}
          <span>Java & Full Stack Development</span>
        </h2>

        <p className="hero-description">
          I build scalable and reliable enterprise applications using Java,
          Spring Boot, microservices, cloud technologies, and modern frontend
          frameworks.
        </p>

        <div className="hero-actions">
          <a href="https://github.com/Jonish96" className="primary-button">
            View My Work
          </a>

          <a href="/jonish_resume.pdf" 
          download="jonish_resume.pdf"
          className="secondary-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;