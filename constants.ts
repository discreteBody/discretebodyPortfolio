
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Narasimha Sai",
    title: "Software Engineer II | Backend & Distributed Systems",
    location: "Andhra Pradesh, India",
    phone: "7660093555",
    email: "chilamakuri604@gmail.com",
    summary: "Backend-focused Software Engineer with professional experience architecting scalable microservices. Proficient in optimizing high-throughput systems (10k+ ops/sec) using Spring Boot, Kafka, and Redis. Deeply invested in System Design, clean architecture, and cloud-native solutions.",
    resumeUrl: "https://drive.google.com/file/d/1IqwJH_-WKNbAWUPSNG_8k-fEteBMvYm5/view?usp=sharing",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/discretebody/" }, 
      { platform: "GitHub", url: "https://github.com/discretebody" },
      { platform: "Codolio", url: "https://codolio.com/profile/discretebody" }
    ]
  },
  experience: [
    {
      company: "Raymedis Medical Technologies",
      role: "Software Development Engineer",
      location: "Hyderabad",
      period: "May 2024 – Present",
      points: [
        "Architected and deployed microservices architecture using Spring Boot, Redis, Docker, and Git, improving system throughput by 50% and reducing inter-service latency by 30%.",
        "Optimized mission-critical backend services, achieving a 25% reduction in data processing latency through advanced SQL tuning and concurrent execution strategies.",
        "Leading the initiative to decouple monolithic services into domain-driven microservices, enhancing maintainability and scalability."
      ]
    },
    {
      company: "Raymedis Medical Technologies",
      role: "Software Engineer Intern",
      location: "Hyderabad",
      period: "Nov 2023 – May 2024",
      points: [
        "Refactored legacy modules in a desktop application into high-throughput data pipelines, increasing processing throughput by 70%.",
        "Standardized UI/UX development by implementing SOLID principles in component libraries, cutting feature delivery cycles by 40%.",
        "Assisted in the migration of on-premise databases to cloud-managed instances, ensuring data integrity and zero downtime."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Summer Software Engineering Intern",
      location: "Chennai",
      period: "Mar 2022 – May 2022",
      points: [
        "Engineered core modules for a high-traffic web application using Java Servlets and JSP, delivering three major features ahead of schedule.",
        "Implemented robust CI/CD pipelines and automated testing strategies, streamlining the deployment process and reducing regression bugs."
      ]
    }
  ],
  projects: [
    {
      title: "Bandhan",
      status: "Production Ready",
      githubUrl: "https://github.com/narasimhaChilmakuri/bandhan-x",
      icon: "🌐",
      description: [
        "Architected a LinkedIn-like distributed connections platform capable of handling high-concurrency user graph operations.",
        "Optimized 2nd and 3rd-degree connection queries using Neo4j, reducing traversal time by 40% for large datasets.",
        "Implemented an event-driven architecture with Kafka to handle real-time feed updates and notifications asynchronously."
      ],
      techStack: ["Spring Boot", "Kafka", "Neo4j", "Redis", "Docker"]
    },
    {
      title: "Scalable URL Shortener",
      status: "Completed",
      icon: "🔗",
      description: [
        "Developed a high-performance URL shortening service utilizing Base62 encoding and the Snowflake algorithm for collision-free unique IDs.",
        "Engineered a caching layer using Redis to serve redirection requests with sub-millisecond latency, significantly reducing database load.",
        "Designed the system for horizontal scalability, supporting high throughput for millions of active short links."
      ],
      techStack: ["Java", "Spring Boot", "Redis", "PostgreSQL", "System Design"]
    },
    {
      title: "Smart Expense Splitter",
      status: "Completed",
      icon: "💸",
      description: [
        "Built a backend engine for tracking shared group expenses, featuring a graph-based debt simplification algorithm to minimize transaction volume.",
        "Handled complex edge cases including unequal splits and multi-currency support, utilizing optimistic locking for data consistency.",
        "Designed efficient RESTful APIs for group management, activity logging, and automated settlement calculations."
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "DSA", "Graph Algorithms"]
    },
    {
      title: "Integrated Tourism Platform",
      status: "In Development",
      icon: "🗺️",
      description: [
        "Developing a comprehensive marketplace aggregating travel packages, accommodation, and verified local guide services.",
        "Building a personalized itinerary generator that suggests food spots and attractions based on geolocation and user preferences.",
        "Architecting a modular microservices backend to handle bookings, payments, and vendor management with high reliability."
      ],
      techStack: ["Spring Boot", "Microservices", "Kafka", "PostGIS", "React"]
    }
  ],
  education: [
    {
      institution: "Vel Tech University",
      location: "Chennai",
      degree: "B.Tech in Computer Science",
      period: "2019 - 2023",
      details: "CGPA: 8.8 | DSA & Algorithms Focus"
    }
  ],
  achievements: [
    "Ranked 3rd in GeeksforGeeks University Challenge (Top 0.5% of 750+ participants).",
    "Consistently active problem solver with 500+ DSA problems solved across LeetCode and CodeChef.",
    "Codolio Profile: Recognized for consistent coding streaks and algorithm proficiency."
  ],
  skills: [
    { 
      name: "System Design & Backend", 
      skills: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis", "System Design", "AWS (Basic)", "Docker", "Kubernetes"] 
    },
    { 
      name: "Data & Storage", 
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Elasticsearch"] 
    },
    { 
      name: "Tools & CI/CD", 
      skills: ["Git", "Jenkins", "Maven/Gradle", "Postman", "JIRA", "IntelliJ IDEA", "Linux"] 
    },
    { 
      name: "Frontend & Others", 
      skills: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "JavaFX", "OpenCV", "WebSockets"] 
    }
  ]
};
