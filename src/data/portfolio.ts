export const profile = {
  firstName: "Jeremy",
  lastName: "Quiroz",
  fullName: "Jeremy Ryan B. Quiroz",
  shortName: "Jeremy Quiroz",
  headline: "Business Analyst  ·  Data Analyst  ·  Full-Stack Developer",
  summary:
    "IT graduate who combines business analysis, data, automation, and software development to turn real-world problems into practical solutions.",
  location: "Philippines",
  availability: "Open to full-time roles",
  email: "jeremyryan.developer@gmail.com",
  education: {
    degree: "Bachelor of Science in Information Technology",
    honors: ["Cum Laude", "Dean's Lister"],
  },
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroBadges = [
  "React",
  "Java",
  "SQL",
  "Power BI",
  "Python",
  "Alteryx",
  "Spring Boot",
  "Excel",
] as const;

export const aboutBody = [
  "I recently completed a BS in Information Technology as a Cum Laude graduate and Dean's Lister. The through-line in my work is translation: taking an operational problem, making the requirements explicit, and delivering something people can actually use — a dashboard, a workflow, or a working product.",
  "Internship work at Macquarie Group taught me to treat data quality as a product. Academic and project work taught me to ship software. Together they mean I can sit with stakeholders, document what matters, then build or automate the path from request to result.",
] as const;

export const whatIBring = [
  {
    title: "Business Analysis",
    body: "Requirements, process maps, and documentation that keep delivery aligned with how the business actually works.",
    icon: "ClipboardList",
  },
  {
    title: "Data & Reporting",
    body: "Clean, reconciled data and stakeholder-ready reports in Excel, SQL, Power BI, and Alteryx.",
    icon: "BarChart3",
  },
  {
    title: "Software Development",
    body: "Full-stack delivery with React, Java Spring Boot, and relational databases — from auth to booking flows.",
    icon: "Code2",
  },
  {
    title: "Automation",
    body: "Removing repetitive reporting and communication work with Power Automate, Alteryx, and Python.",
    icon: "Workflow",
  },
  {
    title: "Project Management",
    body: "Leading delivery with a clear scope, stakeholder cadence, and a bias toward finishing.",
    icon: "Kanban",
  },
] as const;

export const experience = {
  company: "Macquarie Group",
  role: "Procure Ops Analytics Intern",
  period: "January 2026 – May 2026",
  location: "Procurement Operations",
  summary:
    "Supported procure-ops reporting with trusted data, stakeholder-ready dashboards, and automation that reduced repetitive manual work.",
  bullets: [
    "Built and maintained operational reports and dashboards used by procurement stakeholders.",
    "Performed data validation, cleansing, reconciliation, and quality checks across invoice and requisition sources.",
    "Investigated discrepancies, improved data accuracy, and documented findings for reporting owners.",
    "Supported recurring stakeholder reporting requirements with clear, repeatable deliverables.",
    "Automated repetitive reporting and communication workflows to cut cycle time and reduce error.",
  ],
  stack: ["Excel", "SQL", "Alteryx", "Power BI", "Python", "Power Automate"],
} as const;

export const projectFilters = [
  "All",
  "Business Analysis",
  "Data Analytics",
  "Development",
  "Automation",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  categories: Exclude<ProjectFilter, "All">[];
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "lakbay",
    name: "Lakbay",
    tagline: "Travel & tourism platform",
    description:
      "A full-stack travel and tourism platform with authentication and booking flows, designed so travelers can discover destinations and complete reservations in one product.",
    role: "Full-Stack Developer",
    categories: ["Development"],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Java Spring Boot",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
    ],
    features: [
      "Secure authentication and session handling",
      "Destination browsing and booking workflows",
      "REST API backend with relational data models",
      "Responsive interface built for real users, not demos",
    ],
  },
  {
    slug: "aeroponics",
    name: "IoT Aeroponics Management System",
    tagline: "Crop operations, remotely",
    description:
      "An IoT and web-based aeroponics system designed to optimize crop scheduling and day-to-day management — from sensor readings to operator workflows.",
    role: "Project Manager  ·  Project Leader  ·  Full-Stack Developer",
    categories: ["Development", "Automation", "Business Analysis"],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Java Spring Boot",
      "MySQL",
      "NodeMCU",
      "IoT Sensors",
    ],
    features: [
      "Real-time monitoring from IoT sensors",
      "Crop scheduling and growth tracking",
      "Remote management for operators",
      "Inventory and operational data tracking",
      "Hardware-to-web IoT integration",
    ],
  },
  {
    slug: "procure-ops",
    name: "Procurement & Operations Dashboards",
    tagline: "Reporting the business can trust",
    description:
      "Analytics and reporting work delivered during the Macquarie Group internship — operational dashboards that made invoice, PO, and requisition activity inspectable.",
    role: "Procure Ops Analytics Intern",
    categories: ["Data Analytics", "Business Analysis"],
    technologies: ["Power BI", "Excel", "SQL", "Alteryx"],
    features: [
      "Invoice Lines",
      "Invoice Headers",
      "Invoice Approvals",
      "PO Lines",
      "Requisition Headers",
      "Requisition Approvals",
    ],
  },
  {
    slug: "etl",
    name: "Data Quality & ETL Workflows",
    tagline: "Clean inputs, reliable outputs",
    description:
      "Hands-on data quality and transformation work: cleansing, validating, reconciling, and automating the path from raw operational extracts to report-ready datasets.",
    role: "Analytics Intern",
    categories: ["Data Analytics", "Automation"],
    technologies: ["Alteryx", "SQL", "Excel", "Python", "Power Automate"],
    features: [
      "Data cleansing and standardization",
      "Validation and quality checks",
      "Transformation and mapping",
      "Source-to-target reconciliation",
      "ETL workflow design",
      "Reporting automation",
    ],
  },
];

export type Skill = {
  name: string;
  blurb: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ba",
    title: "Business Analysis",
    items: [
      { name: "Requirements Gathering", blurb: "Turning stakeholder conversations into scoped, testable needs." },
      { name: "Stakeholder Communication", blurb: "Clear status, decisions, and tradeoffs — written and spoken." },
      { name: "Process Analysis", blurb: "Finding where work actually happens versus where the process says it does." },
      { name: "Documentation", blurb: "Specs people can implement against, not slide decks that go stale." },
      { name: "BRD", blurb: "Business Requirements Documents that capture scope, rules, and success criteria." },
      { name: "RTM", blurb: "Requirements Traceability Matrices linking needs to design, build, and UAT." },
      { name: "UAT", blurb: "User acceptance planning and execution so delivery matches the business ask." },
      { name: "Process Mapping", blurb: "As-is and to-be flows that make handoffs and exceptions visible." },
      { name: "Agile / SDLC", blurb: "Working inside iterative delivery without losing the requirements thread." },
    ],
  },
  {
    id: "data",
    title: "Data Analytics",
    items: [
      { name: "Excel", blurb: "Analysis, reconciliation, and reporting models used in production ops." },
      { name: "SQL", blurb: "Querying, joining, and validating operational datasets." },
      { name: "Power BI", blurb: "Stakeholder dashboards with a focus on trust and readability." },
      { name: "DAX", blurb: "Measures and models that keep report logic consistent." },
      { name: "Alteryx", blurb: "Repeatable workflows for prep, blend, and quality checks." },
      { name: "Python", blurb: "Scripting for validation, transformation, and light automation." },
      { name: "Pandas", blurb: "Tabular analysis and cleansing when the work outgrows a spreadsheet." },
      { name: "Data Cleaning", blurb: "Standardizing messy operational extracts before they hit a report." },
      { name: "Data Validation", blurb: "Checks that catch mismatches before stakeholders do." },
      { name: "ETL", blurb: "Extract, transform, and load paths that can be rerun, not one-off heroics." },
      { name: "Reporting", blurb: "Recurring operational packs designed around decisions, not decoration." },
    ],
  },
  {
    id: "dev",
    title: "Development",
    items: [
      { name: "React.js", blurb: "Component-driven interfaces with a bias toward clarity and speed." },
      { name: "Java", blurb: "Typed backend logic for services that have to be reliable." },
      { name: "Spring Boot", blurb: "REST APIs, persistence, and service structure for real products." },
      { name: "JavaScript", blurb: "The language of the web UI layer, used deliberately." },
      { name: "Tailwind CSS", blurb: "Utility-first styling that stays consistent at scale." },
      { name: "REST APIs", blurb: "Contracts between frontend, backend, and the people who consume them." },
      { name: "MySQL", blurb: "Relational modeling and queries for transactional systems." },
      { name: "PostgreSQL", blurb: "Structured data when integrity and querying both matter." },
      { name: "HTML / CSS", blurb: "Accessible, semantic markup and layout as a baseline, not an afterthought." },
      { name: "Git", blurb: "Versioned collaboration and a clean history of what changed." },
    ],
  },
  {
    id: "auto",
    title: "Automation",
    items: [
      { name: "Power Automate", blurb: "Workflow automation for reporting and communications that used to be manual." },
      { name: "Alteryx", blurb: "Scheduled, repeatable data pipelines instead of copy-paste rituals." },
      { name: "Python Scripting", blurb: "Small programs that close the gap between extract and insight." },
      { name: "Reporting Automation", blurb: "Taking recurring packs off the critical path of a person." },
      { name: "Process Workflows", blurb: "Encoding a known process so it runs the same way every time." },
    ],
  },
  {
    id: "pm",
    title: "Project Management",
    items: [
      { name: "Project Leadership", blurb: "Owning scope, cadence, and the last mile of delivery." },
      { name: "Agile Delivery", blurb: "Short cycles, visible progress, and room to correct course." },
      { name: "Stakeholder Management", blurb: "Keeping decision-makers informed without drowning them in status." },
      { name: "Scope & Planning", blurb: "What we will ship, what we will not, and when we will know." },
      { name: "Risk Tracking", blurb: "Surfacing blockers early enough to do something about them." },
    ],
  },
];
