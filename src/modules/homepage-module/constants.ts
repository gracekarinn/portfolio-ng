import type { EducationEntry, ExperienceEntry } from "./interfaces";

export const educationEntries: EducationEntry[] = [
  {
    id: "university-of-indonesia",
    institution: "Universitas Indonesia",
    program: "Computer Science",
    period: "August 2023 – Present",
  },
  {
    id: "institut-teknologi-bandung",
    institution: "Institut Teknologi Bandung",
    program: "Pharmaceutical Science and Technology",
    period: "Aug 2022 – May 2023",
  },
  {
    id: "sman-68-jakarta",
    institution: "SMAN 68 JAKARTA",
    program: "Natural Sciences",
    period: "Jul 2019 – Apr 2022",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Sep 2024 – Present",
    role: "Junior Programmer",
    organization: "Hare Innovation Limited Company",
    employmentType: "Internship",
    location: "London Area, United Kingdom",
    workArrangement: "Remote",
    summary:
      "Contribute to the development, maintenance, and modernization of web applications, focusing on full-stack development, system integration, and improving application performance. Collaborate with cross-functional teams to deliver scalable and maintainable solutions.",
  },
  {
    period: "May 2026 – Jun 2026",
    role: "Solution Architect Intern",
    organization: "Bank Mandiri",
    employmentType: "Internship",
    location: "Jakarta Metropolitan Area",
    workArrangement: "On-site",
    summary:
      "Supported enterprise banking infrastructure and digital channel operations by working with technologies including OpenShift, Redis, Kafka, and Control-M. Gained hands-on experience in system architecture, application monitoring, and enterprise integration.",
  },
  {
    period: "Dec 2025 – Mar 2026",
    role: "SAP Project Intern",
    organization: "Accenture",
    employmentType: "Internship",
    location: "Jakarta, Indonesia",
    workArrangement: "On-site",
    summary:
      "Supported SAP data migration activities, including data profiling, cleansing, validation, and reconciliation of over 10,000 procurement records. Utilized SQL and Python to improve data quality and ensure consistency throughout the migration process.",
  },
  {
    period: "Jul 2025 – Jan 2026",
    role: "Teaching Assistant – Platform Based Programming (International Class)",
    organization: "Universitas Indonesia",
    employmentType: "Part-time",
    location: "Depok, West Java, Indonesia",
    workArrangement: "Hybrid",
    summary:
      "Mentored students in mobile application development using Flutter and web development using Django. Assisted with practical sessions, technical troubleshooting, and evaluating programming assignments.",
  },
  {
    period: "Jan 2025 – Aug 2025",
    role: "Teaching Assistant – Foundations of Programming 2",
    organization: "Universitas Indonesia",
    employmentType: "Part-time",
    location: "Depok, West Java, Indonesia",
    workArrangement: "Hybrid",
    summary:
      "Guided students in understanding object-oriented programming and fundamental software development concepts using Java. Provided technical assistance during laboratory sessions and supported students in developing problem-solving skills.",
  },
  {
    period: "Jun 2025 – Aug 2025",
    role: "Full-stack Developer Intern",
    organization: "PT Fungsitama Cipta Teknologi",
    employmentType: "Internship",
    location: "Jakarta, Indonesia",
    workArrangement: "Remote",
    summary:
      "Contributed to full-stack web application development, including frontend implementation, backend functionality, and API integration. Collaborated with the development team to implement features, troubleshoot issues, and improve application usability.",
  },
  {
    period: "Sep 2024 – Jun 2025",
    role: "Web Developer",
    organization: "Economic Space",
    employmentType: "Part-time",
    location: "Surabaya, East Java, Indonesia",
    workArrangement: "Remote",
    summary:
      "Developed and maintained web interfaces with a focus on responsive design, user experience, and application functionality. Collaborated remotely to implement website improvements and support ongoing development requirements.",
  },
];

export const techStackIcons: Record<string, string> = {
  TypeScript: "/assets/tech/typescript.svg",
  "Next.js": "/assets/tech/nextjs.svg",
  React: "/assets/tech/react.svg",
  "Tailwind CSS": "/assets/tech/tailwind.svg",
  "Node.js": "/assets/tech/node.svg",
};

export const techStackCards = [
  { name: "TypeScript", src: "/assets/tech/typescript.svg" },
  { name: "Next.js", src: "/assets/tech/nextjs.svg", monochrome: true },
  { name: "React", src: "/assets/tech/react.svg" },
  { name: "Tailwind CSS", src: "/assets/tech/tailwind.svg" },
  { name: "Node.js", src: "/assets/tech/node.svg" },
  { name: "Vercel", src: "/assets/tech/vercel.svg", lightMonochrome: true },
  { name: "Developer tool", src: "/assets/tech/orange-tool.svg" },
  { name: "Google", src: "/assets/tech/google.svg" },
  { name: "Django", src: "/assets/tech/django.svg" },
  { name: "Python", src: "/assets/tech/python.svg" },
  { name: "Developer tool", src: "/assets/tech/tool-white-a.svg", lightMonochrome: true },
  { name: "RSS", src: "/assets/tech/rss.svg" },
  { name: "Solidity", src: "/assets/tech/solidity.svg", monochrome: true },
  { name: "Developer tool", src: "/assets/tech/circle-tool.svg", monochrome: true },
  { name: "Featured technology", src: "/assets/tech/featured-tool.svg" },
  { name: "Flask", src: "/assets/tech/flask.svg", lightMonochrome: true },
  { name: "HTML5", src: "/assets/tech/html5.svg" },
  { name: "Nginx", src: "/assets/tech/nginx.svg" },
];
