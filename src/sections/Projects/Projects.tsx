import "./Projects.css";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div>
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.githubUrl}>
                  GitHub →
                </a>

                {project.liveUrl && (
                  <a href={project.liveUrl}>
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;