export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Western Union",
    startDate: "Aug 2024",
    endDate: "Present",
    description:
      "Building and supporting enterprise payment and customer onboarding applications using Java, Spring Boot, microservices, Kafka, Temporal, React, Angular, AWS, Docker, and Kubernetes.",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "NIC Asia Bank",
    startDate: "Jun 2022",
    endDate: "Dec 2023",
    description:
      "Developed and maintained enterprise banking applications, backend services, APIs, and integrations supporting financial workflows and business operations.",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Yeti Tech",
    startDate: "May 2019",
    endDate: "May 2022",
    description:
      "Developed full-stack applications and backend services while working across application development, API integration, database operations, testing, and deployment.",
  },
];