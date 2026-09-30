export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
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
    status: "In Progress",
    githubUrl: "https://github.com/Jonish96/order-management",
  },
  {
    id: 2,
    title: "Together Task",
    description:
      "A private iPhone and Android task app for two people. It supports personal and shared tasks plus a conversational task creator that asks questions when important details are missing.",
    technologies: [
      "TypeScript",
      "PlpgSQL",
      "Supabase",
    ],
    githubUrl: "https://github.com/Jonish96/together_task",
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
    githubUrl: "https://github.com/Jonish96/java-engineering-labs",
  },
];