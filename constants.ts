
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Narasimha Sai Chilmakuri",
    title: "Backend Engineer & SDE I | Distributed Systems & Java Microservices",
    location: "Andhra Pradesh, India",
    phone: "7660093555",
    email: "chilamakuri604@gmail.com",
    summary: "SDE-focused Backend Engineer specializing in designing and architecting scalable distributed systems and microservices. Expert in Java Spring Boot development with proven expertise building high-throughput systems (10k+ ops/sec), optimizing system performance, and leading product development initiatives. Proficient in distributed systems architecture, event-driven design, database optimization, and cloud-native solutions. Skilled in system design, clean code architecture, and enterprise-grade backend engineering for SDE1/SDE2 roles.",
    resumeUrl: "https://drive.google.com/file/d/1rEyc3fk9kiQYPLbWiX8r4rF2FJfL2xdz/view?usp=sharing",
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
        "Architect and deploy Java Spring Boot microservices leveraging distributed systems patterns, improving system throughput by 50% while reducing inter-service latency by 30% using Redis caching and message queues.",
        "Optimize mission-critical backend systems achieving 25% reduction in data processing latency through advanced SQL optimization, JVM tuning, concurrent programming, and distributed computing strategies.",
        "Lead microservices migration initiative using domain-driven design (DDD), transforming monolithic Java applications into scalable distributed services with improved fault tolerance and system observability."
      ]
    },
    {
      company: "Raymedis Medical Technologies",
      role: "Software Engineer Intern",
      location: "Hyderabad",
      period: "Nov 2023 – May 2024",
      points: [
        "Engineered high-throughput data pipeline systems using Java, refactoring legacy monolithic services into scalable backend components with 70% improvement in processing throughput.",
        "Implemented SOLID principles and clean architecture patterns in backend services and component libraries, reducing feature delivery cycles by 40% while improving code maintainability.",
        "Supported cloud migration of distributed database systems from on-premise to cloud-managed instances (AWS RDS), ensuring data consistency, zero-downtime deployment, and system reliability."
      ]
    },
    {
      company: "Zoho Corporation",
      role: "Summer Software Engineering Intern",
      location: "Chennai",
      period: "Mar 2022 – May 2022",
      points: [
        "Engineered backend modules for high-traffic Java web application using Servlets and JSP, developing scalable REST APIs and business logic layers, delivering three major features ahead of schedule.",
        "Established robust CI/CD pipelines and automated testing framework, streamlining Java application deployment process and reducing production bugs through comprehensive backend testing strategies."
      ]
    }
  ],
  projects: [
    {
      title: "Bandhan",
      status: "Completed",
      githubUrl: "https://github.com/narasimhaChilmakuri/bandhan-x",
      icon: "🌐",
      description: [
        "Architected a distributed LinkedIn-like connections platform using Java Spring Boot, handling high-concurrency user graph operations with advanced concurrency patterns and scalable system design.",
        "Optimized graph database queries using Neo4j for social network traversal, reducing 2nd/3rd-degree connection query latency by 40% through database indexing and algorithm optimization.",
        "Implemented event-driven microservices architecture using Kafka message broker for asynchronous real-time feed updates, notifications, and event streaming with guaranteed delivery patterns."
      ],
      techStack: ["Spring Boot", "Kafka", "Neo4j", "Redis", "Docker"]
    },
    {
      title: "Scalable URL Shortener",
      status: "Completed",
      githubUrl: "https://github.com/discreteBody/UrlShortner",
      icon: "🔗",
      description: [
        "Developed high-performance URL shortening backend service using Java Spring Boot with distributed ID generation (Snowflake algorithm), handling collision-free unique identity generation at scale.",
        "Engineered multi-layer caching strategy using Redis to serve redirection requests with sub-millisecond latency, achieving 10x reduction in database load through cache-aside pattern implementation.",
        "Designed distributed system architecture for horizontal scalability and load balancing, supporting millions of active short links with high throughput and fault tolerance."
      ],
      techStack: ["Java", "Spring Boot", "Redis", "PostgreSQL", "System Design"]
    },
    {
      title: "Smart Expense Splitter",
      status: "Completed",
      githubUrl: "https://github.com/discreteBody/Fenmo",
      icon: "💸",
      description: [
        "Built distributed backend engine using Java Spring Boot for expense tracking with graph-based algorithms for debt simplification, minimizing transaction volume and improving settlement efficiency.",
        "Implemented concurrent transaction handling with optimistic locking strategy, ensuring data consistency across distributed operations while handling complex edge cases and multi-currency transactions.",
        "Designed RESTful API backend architecture for microservices, implementing event sourcing for activity logging and complex business logic for automated settlement calculations."
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "DSA", "Graph Algorithms"]
    },
        {
      title: "LatencyRace",
      status: "In Development",
      icon: "📊",
      description: [
        "Built a full-stack application using Spring Boot and React/TS featuring a WebSocket-based room system for 25+ simultaneous users.",
        "Integrated Redis for low-latency session management and achieved real-time leaderboard updates with sub-100ms synchronization.",
        "Implemented automated difficulty scaling and server-side verification for typing metrics (WPM/Accuracy)."
      ],
      techStack: ["React + TypeScript", "Spring Boot", "Neon (PostgreSQL)","Docker", "WebSockets" ,"Aiven (Redis)"]
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
    },
    {
      title: "Distributed Observability & Monitoring Suite",
      status: "Completed",
      icon: "📊",
      description: [
        "Implemented a monitoring solution using Micrometer to export JVM and business metrics to a Prometheus time-series database for a microservices cluster.",
        "Designed Grafana dashboards to visualize system health (CPU/Memory) and request latency (P99), reducing Mean Time to Detection (MTTD) by 40%.",
        "Configured Prometheus Alertmanager for automated webhook notifications, enabling proactive resolution of resource bottlenecks before service degradation."
      ],
      techStack: ["Micrometer", "Prometheus", "Grafana", "Alertmanager", "Spring Boot", "JVM Metrics"]
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
    "Ranked 3rd in GeeksforGeeks University Challenge (Top 0.5% of 750+ participants) - demonstrated strong system design and algorithmic problem-solving abilities.",
    "Consistently active problem solver with 500+ DSA problems solved across LeetCode and CodeChef - proving expertise in algorithm optimization and backend system design challenges.",
    "Codolio Profile: Recognized for consistent coding streaks and algorithm proficiency - reflecting deep expertise in scalable system implementation and performance optimization."
  ],
  skills: [
    { 
      name: "Backend & Distributed Systems", 
      skills: ["Java (Core & Advanced)", "Spring Boot Microservices", "Distributed Systems Architecture", "Message Queues (Kafka)", "Caching (Redis)", "System Design & Scalability", "AWS Cloud (EC2, S3, RDS, Lambda)", "Docker & Kubernetes", "Event-Driven Architecture", "Database Optimization"] 
    },
    { 
      name: "Data & Storage", 
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Neo4j", "Elasticsearch"] 
    },
    { 
      name: "Tools & CI/CD", 
      skills: ["Git", "Jenkins", "Build Tools (Maven, Gradle, Bazel)", "Postman", "IntelliJ IDEA", "VS Code", "Cursor", "Linux", "JVM Profiling", "Application Performance Monitoring"] 
    },
    { 
      name: "Frontend & Others", 
      skills: ["TypeScript","React.js", "JavaScript (ES6+)", "HTML5/CSS3", "JavaFX", "OpenCV", "WebSockets"] 
    }
  ]
};
