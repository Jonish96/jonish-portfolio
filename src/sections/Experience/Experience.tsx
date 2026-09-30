import "./Experience.css";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <p className="section-label">EXPERIENCE</p>
        <h2>Where I've worked.</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={experience.id}
            >
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>

                  <p className="company">
                    {experience.company}
                  </p>
                </div>

                <span className="experience-date">
                  {experience.startDate} — {experience.endDate}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;