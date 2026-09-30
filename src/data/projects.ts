export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Order Management System",
    description:
      "A backend-focused order management application designed to manage the complete order lifecycle, including creation, confirmation, processing, shipping, and cancellation.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA",
      "PostgreSQL",
    ],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Payment Processing System",
    description:
      "A distributed payment processing application demonstrating microservices, asynchronous communication, transaction workflows, and resilient backend design.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Microservices",
      "Docker",
    ],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Java Engineering Labs",
    description:
      "A collection of hands-on Java engineering exercises covering core Java, collections, streams, concurrency, application design, and backend development.",
    technologies: [
      "Java 21",
      "Collections",
      "Streams",
      "Concurrency",
    ],
    githubUrl: "#",
  },
];