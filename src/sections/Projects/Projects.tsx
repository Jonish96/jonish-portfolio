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
                {project.status && (
                <span className="project-status">
                  {project.status}
                </span>
              )}
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
               {project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
  >
    GitHub →
  </a>
)}

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