import type { AchievementEntry, ExperienceEntry } from "./interfaces";

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Current",
    role: "Software engineering",
    organization: "Add your organization",
    summary: "Add a concise description of your role, the product, and the meaningful outcomes you created.",
    technologies: ["TypeScript", "Next.js", "Product systems"],
  },
  {
    period: "Previous",
    role: "Data and analytics",
    organization: "Add your organization",
    summary: "Add the work that turned data into useful decisions, clearer processes, or better experiences.",
    technologies: ["Python", "SQL", "Data storytelling"],
  },
  {
    period: "Earlier",
    role: "Product building",
    organization: "Add your organization",
    summary: "Add a short note about the systems, experiments, or collaborations that shaped your practice.",
    technologies: ["Research", "Automation", "Collaboration"],
  },
];

export const achievementEntries: AchievementEntry[] = [
  { number: "01", title: "Add an achievement", context: "Competition, recognition, or milestone", year: "Year" },
  { number: "02", title: "Add an achievement", context: "Certification, fellowship, or program", year: "Year" },
  { number: "03", title: "Add an achievement", context: "Community contribution or selected work", year: "Year" },
];

export const techStack = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "CSS", "Python", "SQL", "Git", "Figma", "Vercel", "PostgreSQL", "Docker", "Kubernetes", "AWS", "GCP"];
