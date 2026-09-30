import "./Skills.css";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <p className="section-label">TECH STACK</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.id}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;