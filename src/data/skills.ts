export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Backend",
    skills: [
      "Java 17/21",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    id: 2,
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Git",
    ],
  },
  {
    id: 4,
    title: "Data & Messaging",
    skills: [
      "Kafka",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Cassandra",
      "RabbitMQ",
      "Temporal",
    ],
  },
];