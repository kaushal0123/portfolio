// Enriched data for Kaushal Kanani's Freelance & Open-Source Portfolio

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/experience" },
  { name: "Notes", link: "/notes" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" },
];

export const personalInfo = {
  name: "Kaushal Kanani",
  role: "Freelance Full-Stack & Backend Systems Engineer",
  subRole: "Java Spring Boot Architect · Node.js / React Builder · Open Source Contributor",
  institution: "Dhirubhai Ambani University, Gandhinagar",
  email: "kaushalkanani12@gmail.com",
  phone: "+91 8758566476",
  status: "Available for Freelance & Contract Projects",
  location: "Gujarat, India (Working Globally)",
  github: "https://github.com/kaushal0123",
  linkedin: "https://linkedin.com/in/kaushal-kanani", // dummy
  codeforces: "https://codeforces.com/profile/kaushal12",
  cfRating: "1414",
  cfRank: "Specialist",
  bio: "Freelance Full-Stack & Backend Systems Engineer with a versatile dual stack: robust, high-throughput microservices in Java Spring Boot on one side, and fast, dynamic web applications with Node.js, React, and Next.js on the other. Active open-source contributor and Codeforces Specialist delivering end-to-end, high-performance software for startups and businesses.",
};

export const dualPersonality = {
  javaStack: {
    title: "Java & Spring Boot Systems Architect",
    subtitle: "Enterprise Backends · Microservices · Concurrency",
    accent: "from-orange-500 to-amber-400",
    description:
      "Engineered for high-volume, mission-critical systems requiring transactional integrity, asynchronous processing, and horizontal scalability.",
    skills: [
      "Java 17 / 21 LTS",
      "Spring Boot 3",
      "Spring Security & JWT",
      "Microservices & Eureka",
      "RabbitMQ Queue Pipelines",
      "Redis Distributed Caching",
      "Docker Sandbox Isolation",
      "PostgreSQL & MySQL",
    ],
    idealFor: "Distributed backends, banking/fintech APIs, queue-heavy processing, code execution judges, enterprise microservices.",
  },
  nodeStack: {
    title: "Node.js & React Full-Stack Builder",
    subtitle: "Modern Web Apps · Fast MVPs · Interactive UIs",
    accent: "from-cyan-400 to-emerald-400",
    description:
      "Crafted for modern startups needing fast go-to-market, responsive UX, real-time analytics, and clean full-stack TypeScript/JavaScript workflows.",
    skills: [
      "Node.js & Express.js",
      "React.js & Next.js 14",
      "TypeScript",
      "Tailwind CSS & Framer Motion",
      "REST & WebSocket APIs",
      "Prisma & PostgreSQL",
      "AI / LLM Integrations (Groq, OpenAI)",
      "FastAPI & Python",
    ],
    idealFor: "SaaS MVPs, client portals, real-time dashboards, interactive tools, AI-powered applications.",
  },
};

export const freelanceServices = [
  {
    id: 1,
    title: "Full-Stack Web App & MVP Development",
    icon: "⚡",
    desc: "Turn your product vision into a polished, responsive web application using React, Next.js, Node.js, and PostgreSQL. From design translation to database setup and deployment.",
    deliverables: ["Responsive UI/UX", "Secure REST APIs", "Database Design", "Vercel / Docker Deploy"],
  },
  {
    id: 2,
    title: "Enterprise Java & Spring Boot Backends",
    icon: "☕",
    desc: "Architect scalable, production-grade microservices with Spring Boot, Spring Security, JWT auth, and relational databases engineered for zero downtime and high throughput.",
    deliverables: ["Microservices Architecture", "API Gateway Routing", "Transaction Management", "Unit & Integration Tests"],
  },
  {
    id: 3,
    title: "Queue-Driven Asynchronous Pipelines",
    icon: "📨",
    desc: "Decouple heavy background computations, email jobs, and file processing using RabbitMQ and Redis caching to keep your web services fast and resilient.",
    deliverables: ["RabbitMQ Broker Setup", "Worker Processors", "Redis Cache Integration", "Fault-Tolerant Retries"],
  },
  {
    id: 4,
    title: "AI Integration & Developer Tooling",
    icon: "🤖",
    desc: "Integrate ultra-fast LLM inference (Groq, OpenAI), vector search (Pinecone RAG), and automated code analysis to supercharge your developer workflows.",
    deliverables: ["RAG Knowledge Retrieval", "Prompt Optimization", "Webhook Automation", "Analytics Dashboards"],
  },
];

export const projects = [
  {
    id: 1,
    title: "CodePulse",
    tagline: "Distributed Online Judge & Code Execution Platform",
    projectType: "Open-Source & Distributed System",
    des: "Architected a distributed online-judge on Spring Boot microservices with JWT authentication, API Gateway routing, Eureka service discovery, RabbitMQ asynchronous queue pipelines, Redis caching, and Docker-isolated code execution sandboxes.",
    category: "backend",
    featured: true,
    tags: ["Java 17", "Spring Boot", "RabbitMQ", "Redis", "Docker", "PostgreSQL", "React", "Eureka", "API Gateway"],
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/dockerName.svg"],
    link: "https://github.com/kaushal0123/codepulse",
    liveLink: "https://codepulse.demo.com",
    metrics: [
      { label: "Execution Sandbox", value: "Docker Isolated" },
      { label: "Queue Architecture", value: "RabbitMQ Async" },
      { label: "Languages Supported", value: "Java, C++, Python" },
      { label: "Avg Execution Latency", value: "< 45ms" },
    ],
    highlights: [
      "Engineered asynchronous queue-driven execution pipelines using RabbitMQ, decoupling submission ingestion from CPU-heavy compilation.",
      "Designed secure Docker-based sandboxes with strict CPU, memory, and networking cgroups limits.",
      "Optimized testcase retrieval with Redis caching to handle high-volume concurrent submissions seamlessly.",
      "Built a responsive React frontend backed by PostgreSQL.",
    ],
    architecture: {
      client: "React Frontend with live execution polling",
      gateway: "Spring Cloud API Gateway with rate limiting & JWT verification",
      discovery: "Netflix Eureka dynamic service discovery",
      queue: "RabbitMQ message broker for queue-driven horizontal scaling",
      worker: "Docker sandboxes executing Java, C++, and Python safely",
      cache: "Redis caching problem metadata & testcases",
      database: "PostgreSQL with optimized schema",
    },
  },
  {
    id: 2,
    title: "PULL-PANDA",
    tagline: "AI-Powered GitHub PR Review Agent",
    projectType: "AI Tooling & Full-Stack Application",
    des: "Engineered an intelligent PR review system combining Retrieval-Augmented Generation (RAG), Semgrep Abstract Syntax Tree (AST) static analysis, and Pinecone vector search to deliver context-aware, repository-grounded code reviews, cutting manual review time by 60%.",
    category: "ai",
    featured: true,
    tags: ["Python", "FastAPI", "Next.js", "Node.js", "Pinecone", "Semgrep", "Groq", "RAG"],
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "https://github.com/kaushal0123/pull-panda",
    liveLink: "https://pullpanda.demo.com",
    metrics: [
      { label: "Inference Engine", value: "Groq LLaMA-3" },
      { label: "Vector Retrieval", value: "Pinecone RAG" },
      { label: "AST Analysis", value: "Semgrep Rules" },
      { label: "Review Time Cut", value: "~60%" },
    ],
    highlights: [
      "Integrated Semgrep AST static rules to catch syntax vulnerabilities before generating context-aware reviews.",
      "Implemented hybrid vector search with Pinecone to index repository guidelines and historical PR discussions.",
      "Connected ultra-low latency Groq LLM inference for near-instant automated code suggestions.",
      "Built an intuitive Next.js web dashboard with real-time PR review analytics.",
    ],
    architecture: {
      ingestion: "GitHub Webhook & Semgrep AST parser",
      vectorDb: "Pinecone vector database for code embeddings",
      llm: "Groq LLaMA-3 inference engine",
      optimizer: "SGDRegressor continuous prompt optimization",
      frontend: "Next.js real-time analytics dashboard",
    },
  },
  {
    id: 3,
    title: "Enterprise Client Platform & API Suite",
    tagline: "Full-Stack Node.js & React Micro-SaaS MVP",
    projectType: "Freelance & Client Solution",
    des: "Developed end-to-end full-stack web application featuring secure JWT authentication, role-based access control, PostgreSQL relational data models, and interactive dashboard analytics built with React, Node.js, and Tailwind CSS.",
    category: "fullstack",
    featured: true,
    tags: ["Node.js", "Express", "React", "Next.js", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST APIs"],
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/kaushal0123",
    liveLink: "https://github.com/kaushal0123",
    metrics: [
      { label: "Architecture", value: "RESTful MVC" },
      { label: "Auth", value: "JWT + RBAC" },
      { label: "Database", value: "PostgreSQL" },
      { label: "UI Response", value: "< 100ms" },
    ],
    highlights: [
      "Designed clean REST API endpoints in Node.js/Express with input validation and rate limiting.",
      "Integrated PostgreSQL relational database with transactional integrity and indexing.",
      "Created modern, accessible React/Next.js dashboard with dark/light themes and instant navigation.",
      "Deployed with Docker containers and automated CI/CD workflows.",
    ],
    architecture: {
      frontend: "React / Next.js client with state management",
      backend: "Node.js & Express RESTful API layer",
      auth: "Stateless JWT authentication with refresh token rotation",
      database: "PostgreSQL with connection pooling",
    },
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Full-Stack & Backend Engineer",
    company: "Self-Employed / Client Consulting",
    location: "Remote / Global",
    period: "2025 – Present",
    desc: "Delivering custom full-stack web applications, scalable backend APIs, and microservices for clients using Java Spring Boot, Node.js, React, and Docker.",
    badge: "Freelance Work",
    thumbnail: "/exp2.svg",
    points: [
      "Building and shipping end-to-end web applications and MVP prototypes tailored to client specifications.",
      "Architecting robust REST API backends in Java Spring Boot and Node.js with database indexing and JWT security.",
      "Implementing queue-driven asynchronous workflows (RabbitMQ, Redis) for smooth user experiences under traffic spikes.",
      "Collaborating closely with clients to deliver clean, maintainable, production-ready code with quick turnaround times.",
    ],
    skills: ["Full-Stack", "Spring Boot", "Node.js", "React", "Client Consulting", "Docker"],
  },
  {
    id: 2,
    title: "Software Developer Engineer Intern",
    company: "WeeTech Solution",
    location: "Surat, Gujarat, India",
    period: "May 2026 – Jul 2026",
    desc: "Engineered and optimized production REST API endpoints with relational database integration in an Agile team. Reduced issue-resolution time through systematic root-cause analysis.",
    badge: "SDE Internship",
    thumbnail: "/exp1.svg",
    points: [
      "Developed and enhanced backend components and REST API endpoints integrated with relational databases using clean, maintainable, and testable code.",
      "Debugged and optimized production systems, reducing issue-resolution time through systematic root-cause analysis and structured logging.",
      "Collaborated with a cross-functional team in an Agile environment to deliver scalable, client-ready features.",
      "Improved overall application reliability and performance through database query profiling and structured debugging.",
    ],
    skills: ["REST APIs", "Relational Databases", "Agile", "System Debugging", "Backend Architecture"],
  },
];

export const openSourceContributions = [
  {
    id: 1,
    title: "CodePulse Execution Engine",
    repo: "kaushal0123/codepulse",
    desc: "Open-source distributed code execution sandbox supporting Java, C++, and Python with RabbitMQ decoupling and Docker containment.",
    stars: "Open Source",
  },
  {
    id: 2,
    title: "PULL-PANDA PR Reviewer",
    repo: "kaushal0123/pull-panda",
    desc: "Automated PR review agent integrating Semgrep AST rules and Groq LLM inference for repository-grounded feedback.",
    stars: "Open Source",
  },
  {
    id: 3,
    title: "Algorithm Problem Solutions & Utilities",
    repo: "kaushal0123/competitive-programming",
    desc: "Curated repository of optimized data structures (Segment Trees, Disjoint Set, Fast I/O) and problem templates for competitive programming.",
    stars: "Specialist 1414",
  },
];

export const responsibilities = [
  {
    id: 1,
    title: "Teaching Assistant (TA)",
    course: "Design and Analysis of Algorithms (DAA)",
    organization: "Dhirubhai Ambani University",
    location: "Gandhinagar, Gujarat",
    period: "Jul 2026 – Present",
    desc: "Assisting faculty in conducting the DAA course, mentoring 80+ students on algorithm design, time/space complexity analysis, and problem-solving techniques.",
    tags: ["Algorithms", "Complexity Analysis", "Mentorship"],
  },
];

export const technicalSkills = {
  languages: [
    { name: "Java", level: "Primary Backend", icon: "☕" },
    { name: "JavaScript / TypeScript", level: "Full-Stack & Node", icon: "🌐" },
    { name: "Python", level: "AI & Scripting", icon: "🐍" },
    { name: "C/C++", level: "Algorithmic Logic", icon: "⚡" },
    { name: "SQL", level: "Relational Queries", icon: "🗄️" },
  ],
  backend: [
    "Java Spring Boot",
    "Node.js & Express.js",
    "Spring Security & JWT",
    "Microservices & Eureka",
    "RESTful API Design",
    "FastAPI",
  ],
  frontend: ["React.js", "Next.js 14", "Tailwind CSS", "TypeScript", "HTML5 / CSS3"],
  databasesAndCaching: ["PostgreSQL", "MySQL", "Redis (In-Memory Cache)"],
  devopsAndInfra: ["RabbitMQ (Message Broker)", "Docker & Sandboxing", "Git & GitHub", "CI/CD"],
  aiAndAnalysis: ["RAG Architecture", "Pinecone Vector DB", "Groq LLM Inference", "Semgrep Static Analysis"],
  coreFundamentals: [
    "Data Structures & Algorithms",
    "System Design & Scalability",
    "Object-Oriented Programming (OOP)",
    "Distributed Systems",
    "Asynchronous Processing",
  ],
  tools: ["Postman", "IntelliJ IDEA", "VS Code", "pgAdmin", "Docker CLI", "Git"],
};

export const technicalNotes = [
  {
    slug: "distributed-code-execution-engine",
    title: "Architecting an Asynchronous Code Execution Engine with RabbitMQ & Docker",
    date: "November 2026",
    readingTime: "5 min read",
    category: "System Design",
    summary:
      "How CodePulse decouples user code submissions from CPU-heavy evaluation using RabbitMQ message queues and isolated Docker sandboxes to achieve horizontal scalability.",
    takeaways: [
      "Decoupling submission ingestion from execution prevents server thread starvation during traffic spikes.",
      "Ephemeral Docker sandboxes with strict CPU, memory, and networking limits isolate untrusted code execution.",
      "Redis caching for active problem testcases reduces database I/O by over 80%.",
    ],
  },
  {
    slug: "dual-stack-node-and-spring-boot",
    title: "Choosing Between Node.js and Java Spring Boot for Client Projects",
    date: "October 2026",
    readingTime: "4 min read",
    category: "Architecture",
    summary:
      "When to pick Node.js/TypeScript for fast startup MVPs versus Java Spring Boot for high-concurrency enterprise microservices, and how to combine both effectively.",
    takeaways: [
      "Node.js/Next.js excels at rapid MVP delivery, real-time websockets, and seamless TypeScript integration across frontend and backend.",
      "Spring Boot provides enterprise stability, strong typing, mature transaction boundaries, and predictable multi-threaded CPU handling.",
      "Polyglot microservices: using Node.js for client-facing aggregators and Spring Boot for heavy data services.",
    ],
  },
  {
    slug: "repository-grounded-pr-review-rag",
    title: "Building a Repository-Grounded PR Reviewer with RAG, Semgrep AST, and Groq",
    date: "October 2026",
    readingTime: "6 min read",
    category: "AI & Systems",
    summary:
      "How PULL-PANDA integrates AST-level static security scanning with vector retrieval and ultra-low-latency Groq inference to generate context-rich pull request feedback.",
    takeaways: [
      "Static analysis with Semgrep eliminates obvious syntax vulnerabilities before token-expensive LLM calls.",
      "Hybrid retrieval: Embedding codebase documentation in Pinecone ensures contextually grounded suggestions.",
      "Automated reviews save senior engineers hours of manual syntax and styling checks.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Information and Communication Technology (ICT)",
    institution: "Dhirubhai Ambani University",
    location: "Gandhinagar, Gujarat, India",
    period: "2023 – Present",
    score: "Final Year Undergraduate",
    highlights: "Focus on Distributed Systems, Cloud Architecture, and Algorithm Design.",
  },
  {
    id: 2,
    degree: "Higher Secondary (XII - GHSEB) & Secondary (X - GSEB)",
    institution: "Ashadeep Vidhyalaya",
    location: "Surat, Gujarat, India",
    period: "2021 – 2023",
    score: "JEE Main: 98.38 Percentile · ACPC State Rank: 201st",
    highlights: "Strong mathematical aptitude and problem-solving foundation.",
  },
];

export const simulationProblems = [
  {
    id: "two-sum",
    title: "Two Sum (HashMap)",
    difficulty: "Easy",
    timeLimit: "1.0s",
    memoryLimit: "256MB",
    languages: {
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];
            if (map.containsKey(comp)) {
                return new int[] { map.get(comp), i };
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mp;
        for (int i = 0; i < nums.size(); i++) {
            int comp = target - nums[i];
            if (mp.count(comp)) return {mp[comp], i};
            mp[nums[i]] = i;
        }
        return {};
    }
};`,
      python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        lookup = {}
        for i, n in enumerate(nums):
            comp = target - n
            if comp in lookup:
                return [lookup[comp], i]
            lookup[n] = i
        return []`,
    },
    verdict: "Accepted",
    runtime: "38 ms",
    memory: "14.2 MB",
    testsPassed: "15 / 15",
  },
  {
    id: "rate-limiter",
    title: "Token Bucket Rate Limiter",
    difficulty: "Medium",
    timeLimit: "1.5s",
    memoryLimit: "512MB",
    languages: {
      java: `public class TokenBucketRateLimiter {
    private final long capacity;
    private final double refillRatePerSec;
    private double tokens;
    private long lastRefillTimestamp;

    public synchronized boolean allowRequest(int tokensRequested) {
        refill();
        if (tokens >= tokensRequested) {
            tokens -= tokensRequested;
            return true;
        }
        return false;
    }
}`,
      cpp: `class TokenBucket {
    long long capacity;
    double refillRate;
    double tokens;
    chrono::steady_clock::time_point lastRefill;
public:
    bool allowRequest(int reqTokens = 1) {
        refill();
        if (tokens >= reqTokens) {
            tokens -= reqTokens;
            return true;
        }
        return false;
    }
};`,
      python: `class TokenBucket:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = capacity
        self.last_refill = time.time()

    def allow_request(self, tokens: int = 1) -> bool:
        self._refill()
        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False`,
    },
    verdict: "Accepted",
    runtime: "44 ms",
    memory: "16.8 MB",
    testsPassed: "24 / 24",
  },
];

// Compatibility exports
export const companies = [
  { id: 1, name: "Java / Spring Boot", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "Node.js & React", img: "/re.svg", nameImg: "/streamName.svg" },
  { id: 3, name: "Docker", img: "/dock.svg", nameImg: "/dockerName.svg" },
  { id: 4, name: "RabbitMQ", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 5, name: "PostgreSQL", img: "/host.svg", nameImg: "/hostName.svg" },
];

export const testimonials = [
  {
    quote: "Kaushal delivers high-quality, maintainable code with quick turnaround. His dual expertise in Spring Boot and modern React/Node.js makes him an invaluable asset for building scalable products.",
    name: "Engineering Client",
    title: "Freelance Client Feedback",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Freelance Full-Stack & Systems Architecture",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Codeforces Specialist (1414 peak)",
    description: "Algorithmic thinking",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Java Spring Boot · Node.js · React · Docker",
    description: "Dual Stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", link: "https://github.com/kaushal0123", label: "GitHub" },
  { id: 2, img: "/link.svg", link: "https://linkedin.com/in/kaushal-kanani", label: "LinkedIn" },
  { id: 3, img: "/c.svg", link: "https://codeforces.com/profile/kaushal12", label: "Codeforces" },
];
